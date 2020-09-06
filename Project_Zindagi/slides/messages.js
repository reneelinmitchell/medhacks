var hello = document.getElementById('main');
var srk = document.createElement('img');
srk.src = 'https://raw.githubusercontent.com/reneelinmitchell/medhacks/master/Project_Zindagi/zindagi.jpg';
var srkDiv = document.createElement('div');
srkDiv.appendChild(srk);
var srkTextTag = document.createElement('h2');
srkTextTag.innerText = "Welcome to the messages section!  This is where your care providers communicate with you.  Click on your first message to open it!";
srkDiv.appendChild(srkTextTag);
srkDiv.style = 'position: absolute; z-index: 99999; width: 300px; height: 430px; left: 750px; right: 20px; top: 220px; margin-left: 20%; background-color: white';
srk.style = 'display: block; margin-left: auto; margin-right: auto; width: 40%; padding-top: 7%; text-align: center';
srkTextTag.style = "padding: 6%";
hello.appendChild(srkDiv);

// window.onload = function() {
// 	document.getElementsByClassName("MessageList")[0].onclick = function(){
// 		srkTextTag.innerText = "Click the blue print icon to print out the message for your records, and scroll to the bottom of the message to reply.  To ask a question, click on the green button above!";
// 	};
// };

// document.getElementsByClassName("headerlink")[0].onclick = function() {
// 	alert("what's up");
// };