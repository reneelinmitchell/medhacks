var audio = document.createElement("audio");
audio.src = "../audio/hello.mp3";
audio.autoplay = true;
audio.load();
var hiddenClass = document.getElementsByClassName("hidden")[0];
hiddenClass.appendChild(audio);

var hello = document.getElementById('main');
var srk = document.createElement('img');
srk.src = 'https://raw.githubusercontent.com/reneelinmitchell/medhacks/master/Project_Zindagi/zindagi.jpg';
var srkDiv = document.createElement('div');
srkDiv.appendChild(srk);
var srkTextTag = document.createElement('h2');
srkTextTag.innerText = "Welcome to the visits section!  See your calendar for important dates to keep in mind.  Let's schedule your appointment together!";
srkDiv.appendChild(srkTextTag);
srkDiv.style = 'position: absolute; z-index: 99999; width: 300px; height: 430px; left: 600px; right: 20px; top: 120px; margin-left: 20%; background-color: white';
srk.style = 'display: block; margin-left: auto; margin-right: auto; width: 40%; padding-top: 7%; text-align: center';
srkTextTag.style = "padding: 6%";
hello.appendChild(srkDiv);