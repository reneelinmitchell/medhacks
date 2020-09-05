var hello = document.getElementsByClassName('loginAlerts')[0];
var srk = document.createElement('img');
srk.src = 'https://raw.githubusercontent.com/reneelinmitchell/medhacks/master/Project_Zindagi/zindagi.png';
//srk.src = "https://www.pinkvilla.com/files/srkraone8year.jpg";

var srkDiv = document.createElement('div');
srkDiv.appendChild(srk);
var srkTextTag = document.createElement('h2');
srkTextTag.innerText = 'Hi! Welcome to MyChart! My name is Zindagi, and I am at your service! I am here to walk you through the basics :)';
srkDiv.appendChild(srkTextTag);
srkDiv.style = 'position: absolute; width: 300px; height: 430px; left: 600px; right: 20px; top: 10px; margin-left: 20%; background-color: white';
srk.style = 'width: 50%; height: 50%; padding-top: 4%';
srkTextTag.style = "padding: 6%";

var button = document.createElement('button');
button.type = "button";
var text = document.createTextNode("Click here to go to the next step!"); 
button.appendChild(text);
button.value = "nextStep";
button.style = "width: 200px; height: 50px";
button.onclick = function(){
	// chrome.tabs.executeScript({file: "slides/slide2.js"});
    srkTextTag.innerText = 'If you are an existing user, enter your MyChart username where the arrow is pointing.  Then press the tab key!';

    var rightArrow = document.createElement('img');
    rightArrow.src = "https://www.pngfind.com/pngs/m/302-3023323_arrow-pointing-to-right-comments-right-arrow-png.png";
    rightArrow.style = 'position: absolute; width: 100px; height: 50px; right: 600px; top: 45px; margin-right: 15%;';
    hello.appendChild(rightArrow);
    button.style = "visibility: hidden";

    document.addEventListener("keydown", function(event) {
	  console.log(event.which);

	  if (event.which == 9) {
	  	rightArrow.style = 'position: absolute; width: 100px; height: 50px; right: 600px; top: 95px; margin-right: 15%;';
	  	srkTextTag.innerText = "Now enter your password where the arrow indicates.  Then press enter!";
	  }
	})

    return false;
}

srkDiv.appendChild(button);
hello.appendChild(srkDiv);
