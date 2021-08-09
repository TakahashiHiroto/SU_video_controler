let rate_counter = 0;
let play_counter = 0;
let video_now = "play";
let date = chrome.extension.getBackgroundPage().test_value;

// 現在アクティブなタブにデータを送信
function sendPlaybackrate_up(){
    console.log(date);
    rate_counter += 0.1;
    let RATE = date.playbackRate + rate_counter;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, 
            RATE
            );
    });    
}

function sendPlaybackrate_down(){
    rate_counter -= 0.1;
    let RATE = date.playbackRate + rate_counter;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, 
            RATE
            );
    });    
}

function video_pause(){
    play_counter += 1;
    if(play_counter % 2 == 0){
        video_now = "play";
    }
    else{
        video_now = "pause";
    }
    document.getElementById('button3').innerHTML = video_now;   
}



const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
button1.addEventListener('click',sendPlaybackrate_up);
button2.addEventListener('click',sendPlaybackrate_down);
button3.addEventListener('click',video_pause);

