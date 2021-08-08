//webページの情報をbackground.jsに送信
setTimeout(function () {
    let frame = document.getElementsByName('webclass_content');
    let frameDocument = frame[0].contentDocument || frame[0].contentWindow.document;
    console.log(frameDocument);
    let Rate = frameDocument.getElementById('video').playbackRate;
    chrome.runtime.sendMessage(Rate)
},3000);


//popup.jsから新たな再生速度の値を受信
chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        console.log('clickを感知');
        console.log('現在の再生速度：'+message+'倍');
        document.getElementsByName('webclass_content')[0].contentDocument.getElementById('video').playbackRate = message;
    return true;
});

//汚いけど勘弁。