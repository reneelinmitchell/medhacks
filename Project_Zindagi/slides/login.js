//var hello = document.getElementsByClassName('loginAlerts')[0];
var hello = document.getElementById('main');
var srk = document.createElement('img');
srk.src = 'https://raw.githubusercontent.com/reneelinmitchell/medhacks/master/Project_Zindagi/zindagi.jpg';
srk.style = "border: 12px solid #fff";
var srkDiv = document.createElement('div');
srkDiv.appendChild(srk);
var srkTextTag = document.createElement('h2');
srkTextTag.innerText = 'Hi! Welcome to MyChart! My name is Zindagi, and I am at your service! I am here to walk you through the basics :)';
srkDiv.appendChild(srkTextTag);
//srkDiv.style = 'position: absolute; width: 300px; height: 430px; left: 600px; right: 20px; top: 10px; margin-left: 20%; background-color: white';
srkDiv.style = 'position: absolute; width: 300px; height: 470px; left: 660px; right: 20px; top: 360px; margin-left: 20%; background-color: white';
srk.style = 'display: block; margin-left: auto; margin-right: auto; width: 40%; padding-top: 7%; text-align: center';
srkTextTag.style = "padding: 6%";
var button = document.createElement('button');
button.type = "button";
var text = document.createTextNode("Click here to go to the next step!"); 
button.appendChild(text);
button.value = "nextStep";
button.style = "width: 200px; height: 50px; margin-left: 17%";
button.onclick = function(){
    // chrome.tabs.executeScript({file: "slides/slide2.js"});
    srkTextTag.innerText = 'If you are an existing user, enter your MyChart username where the arrow is pointing.  Then press the tab key!';
    var usernameBox = document.getElementsByClassName('login')[0];
    var rightArrow = document.createElement('img');
    rightArrow.src = "https://www.pngfind.com/pngs/m/302-3023323_arrow-pointing-to-right-comments-right-arrow-png.png";
    rightArrow.style = 'position: absolute; z-index: 9999999; width: 100px; height: 50px; right: 300px; top: 120px';
    usernameBox.appendChild(rightArrow);
    button.style = "visibility: hidden";

    document.addEventListener("keydown", function(event) {
      if (event.which == 9) {
        rightArrow.style = 'position: absolute; z-index: 9999999; width: 100px; height: 50px; right: 300px; top: 180px';
        srkTextTag.innerText = "Now enter your password where the arrow indicates.  Then press enter!";
      }
    })

    return false;
}

srkDiv.appendChild(button);
hello.appendChild(srkDiv);

// var audio = document.createElement("iframe");
// audio.src = 'C:/Users/student/Documents/medhacks/Project_Zindagi/audio/audio0.wav';
// audio.allow = 'autoplay';
// audio.style = 'visibility: hidden';
// srkDiv.appendChild(audio);
