var test_value;

//content.jsから現在の再生速度を受信
chrome.runtime.onMessage.addListener(
    function(request,sender,sendResponse) {
        test_value = request;
    }
);