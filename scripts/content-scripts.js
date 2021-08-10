//webページの情報をbackground.jsに送信
setTimeout(function () {
    let frame = document.getElementsByName('webclass_content');
    let frameDocument = document || frame[0].contentDocument || frame[0].contentWindow.document;
    console.log(frameDocument);
    let Rate = frameDocument.getElementById('video').playbackRate; 
    chrome.runtime.sendMessage({
        "playbackRate": Rate
    });
},1000);


//popup.jsから新たな再生速度の値を受信
chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        if(isNaN(message)){
            if(message == 'pause'){
                document.getElementsByName('webclass_content')[0].contentDocument.getElementById('video').play();
                console.log("video is playing.");
                return;
            }
            else if(message = 'play'){
                document.getElementsByName('webclass_content')[0].contentDocument.getElementById('video').pause();
                console.log("video is stopping.");
                return;
            }
            return;
        }
        else if( Math.abs(message) == 10){
            document.getElementsByName('webclass_content')[0].contentDocument.getElementById('video').currentTime += message;
            return;
        }
        else{
            console.log('clickを感知');
            console.log('現在の再生速度：'+ (1 + message)+'倍');
            document.getElementsByName('webclass_content')[0].contentDocument.getElementById('video').playbackRate = 1 + message;
        }
        
        return true; //←これ不必要？
});


//汚いけど勘弁。