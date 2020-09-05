var hello = document.getElementById('homepagemain');
var srk = document.createElement('img');
srk.src = 'https://raw.githubusercontent.com/reneelinmitchell/medhacks/master/Project_Zindagi/zindagi.png';
var srkDiv = document.createElement('div');
srkDiv.appendChild(srk);
var srkTextTag = document.createElement('h2');
srkTextTag.innerText = "Now you are logged into MyChart!  Welcome to Zindagi's personal tour.  Click the button below to start!";
srkDiv.appendChild(srkTextTag);
srkDiv.style = 'position: absolute; width: 300px; height: 430px; left: 600px; right: 20px; top: 120px; margin-left: 20%; background-color: white';
srk.style = 'width: 50%; height: 50%; padding-top: 4%';
srkTextTag.style = "padding: 6%";

var button = document.createElement('button');
button.type = "button";
var text = document.createTextNode("Start the tour!"); 
button.appendChild(text);
button.value = "nextStep";
button.style = "width: 200px; height: 50px";
button.onclick = function(){
	var rightArrow = document.createElement('img');
    rightArrow.src = "https://www.pngfind.com/pngs/m/302-3023323_arrow-pointing-to-right-comments-right-arrow-png.png";
    rightArrow.style = 'position: absolute; width: 100px; height: 50px; right: 600px; top: 45px; margin-right: 15%;';
    hello.appendChild(rightArrow);
    button.style = "visibility: hidden";
	srkTextTag.innerText = "The circled area is the messaging button.  It is where your health providers leave notes for you!  Move your cursor over the icon";
}

srkDiv.appendChild(button);
hello.appendChild(srkDiv);
