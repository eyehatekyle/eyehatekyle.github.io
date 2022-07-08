// alert('Warning: Test site is test.');

let myButton = document.getElementById('changeuser');
let greetingtext = document.getElementById('greeting')

var today = new Date();
var hourNow = today.getHours();
var greeting;

/*
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
*/

function setUserName() {
	let myName = prompt('Please enter your name.');
	if(!myName) {
		setUserName();
	} else{
		localStorage.setItem('name', myName);
		greetingtext.innerHTML = myName;
	}

}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	greetingtext.innerHTML = storedName;
}

myButton.onclick = function() {
	setUserName();
}

/*
const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

info.textContent = 'Below is a dynamic list. Click anywhere on the page to add a new list item. Click an existing list item to change its text to something else.';

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function() {
  const listItem = document.createElement('li');
  const listContent = prompt('What content do you want the list item to have?');
  listItem.textContent = listContent;
  list.appendChild(listItem);

  listItem.onclick = function(e) {
    e.stopPropagation();
    const listContent = prompt('Enter new content for your list item');
    this.textContent = listContent;
  }
}
*/