document.addEventListener('DOMContentLoaded', function() {

  chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({file: "slides/slide1.js"});
  });

});