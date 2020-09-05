console.log("hello there what's up");

document.addEventListener('DOMContentLoaded', function() {
  var headerText = document.getElementsByTagName('h1')[0].innerText;
  var homePagePopup = document.getElementById('homePage');
  var isHomePage = false;
  $homePagePopup.toggle(shouldElementBeVisible == false);

  if (headerText == "MyChart - Your secure online health connection") {
    isHomePage = true;
    console.log("isHomePage: " + isHomePage);
    $homePagePopup.toggle(shouldElementBeVisible == true);
  }

    // make sure that the user has done what is needed to advance 
  }, false);

// document.addEventListener('DOMContentLoaded', function() {
//   var checkPageButton = document.getElementById('checkPage');
//   checkPageButton.addEventListener('click', function() {

//     chrome.tabs.getSelected(null, function(tab) {
//       d = document;

//       var f = d.createElement('form');
//       f.action = 'http://gtmetrix.com/analyze.html?bm';
//       f.method = 'post';
//       var i = d.createElement('input');
//       i.type = 'hidden';
//       i.name = 'url';
//       i.value = tab.url;
//       f.appendChild(i);
//       d.body.appendChild(f);
//       f.submit();
//     });
//   }, false);
// }, false);

