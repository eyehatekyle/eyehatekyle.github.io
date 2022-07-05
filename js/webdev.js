// alert('Warning: Test site is test.');

let myButton = document.getElementById('changeuser');
let greetingtext = document.getElementById('greeting')

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow < 12){
  greeting = 'Good morning, ';
}
else if (hourNow < 18){
  greeting = 'Good afternoon, ';
}
else if (hourNow < 24){
  greeting = 'Good evening, '; 
}
else {
  greeting = "Welcome, ";
}

function setUserName() {
	let myName = prompt('Please enter your name.');
	if(!myName) {
		setUserName();
	} else{
		localStorage.setItem('name', myName);
		greetingtext.innerHTML = greeting + myName + '.';
	}

}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	greetingtext.innerHTML = greeting + storedName + '.';
}

myButton.onclick = function() {
	setUserName();
}




