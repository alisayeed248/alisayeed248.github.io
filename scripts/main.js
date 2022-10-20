let myImage = document.querySelector("img");
const heading2 = document.querySelector("h2");
heading2.textContent = "Click the cat!";


myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/bonky2.png") {
        myImage.setAttribute("src", "images/orangeCat.png");
    } else {
        myImage.setAttribute("src", "images/bonky2.png");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName); //localStorage is an API that's called on, stores data in browser
        myHeading.textContent = 'Welcome ' + myName;
    }
}
    

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.innerHTML = 'Hi ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
