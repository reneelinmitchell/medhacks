var hello = document.getElementsByClassName('loginAlerts')[0];
var srk = document.createElement('img');
srk.src = 'https://www.filmibeat.com/img/2017/01/10-1484055289-kal-ho-na-ho-1.jpg';
console.log(srk.src);

var srkDiv = document.createElement('div');
srkDiv.appendChild(srk);
var srkTextTag = document.createElement('h2');
srkTextTag.innerText = 'Hi! Welcome to MyChart! My name is Zindagi, and I am at your service! I am here to walk you through the basics :)';
srkDiv.appendChild(srkTextTag);
srkDiv.style = 'position: absolute; width: 300px; height: 350px; left: 600px; right: 20px; top: 10px; margin-left: 20%; background-color: white';
srk.style = 'width: 50%; height: 40%; padding-top: 4%';
srkTextTag.style = "padding: 6%";

var button = document.createElement('button');
button.type = "button";
var text = document.createTextNode("Click here to go to the next step!"); 
button.appendChild(text);
button.value = "nextStep";
button.style = "width: 200px; height: 50px";
button.onclick = ""; // document.getElementById('searchForm').submit()
srkDiv.appendChild(button);

hello.appendChild(srkDiv);
