// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }

// document.querySelector("html").addEventListener("click", function () {
//     alert(multiply(4,7))
//   });

let myImage = document.querySelector('img');

myImage.onclick = ()=> {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/image1.jpg') {
    myImage.setAttribute('src', 'images/image2.jpg');
    } else {
    myImage.setAttribute('src', 'images/image1.jpg');
    }
}

// Set User Name
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
  }

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

myButton.onclick = function() {
    setUserName();
}

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
  }