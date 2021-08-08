let rate_counter = 0;

// 現在アクティブなタブにデータを送信
function sendPlaybackrate1(){
    let Rate = chrome.extension.getBackgroundPage().test_value;
    rate_counter += 0.1;
    let RATE = Rate + rate_counter;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, 
            RATE
            );
    });    
}

function sendPlaybackrate2(){
    let Rate = chrome.extension.getBackgroundPage().test_value;
    rate_counter -= 0.1;
    let RATE = 1 + rate_counter;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, 
            RATE
            );
    });    
}

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
button1.addEventListener('click',sendPlaybackrate1);
button2.addEventListener('click',sendPlaybackrate2);

