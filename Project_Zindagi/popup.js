document.addEventListener('DOMContentLoaded', function() {

  chrome.browserAction.onClicked.addListener(function(tab) {
    console.log('hellooo');
    chrome.tabs.executeScript({file: "content.js"});
  });

});