var hello = document.getElementById('homepagemain');
var srk = document.createElement('img');
srk.src = 'https://raw.githubusercontent.com/reneelinmitchell/medhacks/master/Project_Zindagi/zindagi.jpg';
var srkDiv = document.createElement('div');
srkDiv.appendChild(srk);
var srkTextTag = document.createElement('h2');
srkTextTag.innerText = "Now you are logged into MyChart!  Welcome to Zindagi's personal tour.  Click the button below to start!";
srkDiv.appendChild(srkTextTag);
srkDiv.style = 'position: absolute; z-index: 99999; width: 300px; height: 430px; left: 600px; right: 20px; top: 120px; margin-left: 20%; background-color: white';
srk.style = 'width: 50%; height: 50%; padding-top: 7%; padding-left: 7%';
srkTextTag.style = "padding: 6%";

var button = document.createElement('button');
button.type = "button";
var text = document.createTextNode("Start the tour!"); 
button.appendChild(text);
button.value = "nextStep";
button.style = "width: 200px; height: 50px";
button.onclick = function(){
	var rightArrow = document.createElement('img');
	var messageIcon = document.getElementsByClassName("menugroup")[2];
    rightArrow.src = "https://www.pngfind.com/pngs/m/109-1092958_png-file-svg-arrow-pointing-up-transparent-png.png";
    rightArrow.style = 'position: absolute; z-index: 99999; width: 50px; height: 100px; left: 590px; top: 120px;';

    messageIcon.appendChild(rightArrow);
    button.style = "visibility: hidden";
	srkTextTag.innerText = "The arrow is pointing to the messaging button.  It is where your health providers leave notes for you!  Move your cursor over the icon";

	messageIcon.onmouseover = function(){
		srkTextTag.innerText = "Now click on Message Center to access your messages!";
	};
}

srkDiv.appendChild(button);
hello.appendChild(srkDiv);
