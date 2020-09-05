document.addEventListener('DOMContentLoaded', function() {

  chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({file: "slides/login.js"});
  });

});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.url) {
    chrome.tabs.executeScript({file: "slides/home.js"});
  };
});

// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//   if (changeInfo.url) {
//     chrome.tabs.executeScript({file: "slides/messages.js"});
//   };
// });