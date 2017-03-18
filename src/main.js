document.addEventListener('DOMContentLoaded', function () {
    chrome.storage.sync.get(['newTabUrl'], function(value){
        location.href = value.newTabUrl || 'https://www.baidu.com';
    });
});


