var hello = document.getElementById('main');
var srk = document.createElement('img');
srk.src = 'https://raw.githubusercontent.com/reneelinmitchell/medhacks/master/Project_Zindagi/zindagi.png';
var srkDiv = document.createElement('div');
srkDiv.appendChild(srk);
var srkTextTag = document.createElement('h2');
srkTextTag.innerText = "Welcome to the messages section!  This is where your care providers communicate with you";
srkDiv.appendChild(srkTextTag);
srkDiv.style = 'position: absolute; z-index: 99999; width: 300px; height: 430px; left: 600px; right: 20px; top: 120px; margin-left: 20%; background-color: white';
srk.style = 'display: block; margin-left: auto; margin-right: auto; width: 40%; padding-top: 7%; text-align: center';
srkTextTag.style = "padding: 6%";

var button = document.createElement('button');
button.type = "button";
var text = document.createTextNode("Let's get started!"); 
button.appendChild(text);
button.value = "nextStep";
button.style = "width: 200px; height: 50px; margin-left: 10%";
srkDiv.appendChild(button);
hello.appendChild(srkDiv);