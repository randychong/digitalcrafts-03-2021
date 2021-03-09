let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'week1/day1/prework/images/city.jpeg') {
        myImage.setAttribute('src','week1/day1/prework/images/retreat-2020.jpg');
    } else {
        myImage.setAttribute('src','week1/day1/prework/images/city.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to my page, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to my page, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}