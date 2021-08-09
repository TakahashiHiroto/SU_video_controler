let rate_counter = 0;
let play_counter = 0;
let video_now = "play";
let date = chrome.extension.getBackgroundPage().test_value;


// 現在アクティブなタブにデータを送信
function Rate_up_little(){
    console.log(date);
    rate_counter += 0.1;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, rate_counter); //第二引数は送る要素
        document.getElementById('now').innerHTML = "Now playbackRate:" + (1 + rate_counter);
    });    
}

function Rate_down_little(){
    rate_counter -= 0.1;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, rate_counter);
        document.getElementById('now').innerHTML = "Now playbackRate:" + (1 + rate_counter);
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
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, video_now);
    });
    document.getElementById('button3').innerHTML = video_now;   
}

function Rate_up_much(){
    rate_counter += 0.5;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, rate_counter);
        document.getElementById('now').innerHTML = "Now playbackRate:" + (1 + rate_counter);
    });    
}

function Rate_down_much(){
    rate_counter -= 0.5;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, rate_counter);
        document.getElementById('now').innerHTML = "Now playbackRate:" + (1 + rate_counter);
    });    
}

function video_back_10(){
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, -10);
    });    
}

function video_go_10(){
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, 10);
    });    
}


const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');
const button6 = document.getElementById('button6');
const button7 = document.getElementById('button7');
button1.addEventListener('click',Rate_up_little);
button2.addEventListener('click',Rate_down_little);
button3.addEventListener('click',video_pause);
button4.addEventListener('click',Rate_up_much);
button5.addEventListener('click',Rate_down_much);
button6.addEventListener('click',video_go_10);
button7.addEventListener('click',video_back_10);

