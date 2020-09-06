document.addEventListener('DOMContentLoaded', function() {

  chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({file: "slides/login.js"});
  });

});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	// debugger;
	if ((changeInfo.url != null) && (changeInfo.url != "undefined")) {
		if (changeInfo.url.includes("Mychart/inside.asp")) {
		    chrome.tabs.executeScript({file: "slides/home.js"});
		  } else if (changeInfo.url.includes("Mychart/Messaging/Review?mailbox")) {
		  	chrome.tabs.executeScript({file: "slides/messages.js"});
		  } else if (changeInfo.url.includes("Visits/visitslist")) {
		  	chrome.tabs.executeScript({file: "slides/visits.js"})
		  };
	}
  
});
