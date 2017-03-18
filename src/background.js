chrome.browserAction.onClicked.addListener(function(){
    chrome.tabs.getSelected(function(tab) {
        chrome.storage.sync.set({'newTabUrl': tab.url});
        alert('设置新标签页【' + tab.url + '】成功！'); 
    });
});

