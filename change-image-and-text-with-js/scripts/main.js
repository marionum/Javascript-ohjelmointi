// scripts/main.js

// Image and background switcher code

let logo = document.getElementById('logo');
let myHeading = document.querySelector('h1');
let body = document.body;

logo.onmouseover = function() {
  myHeading.innerHTML = 'Is Brave even Cooler';
  logo.setAttribute('src', "images/Brave_lion_icon.svg.png");
  body.style.backgroundColor = 'white';
};

logo.onmouseout = function() {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + (storedName || '');
  logo.setAttribute("src", "images/firefox-icon.png");
  body.style.backgroundColor = 'orange';
};

// Personalized welcome message code

let myButton = document.querySelector('button');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
};
