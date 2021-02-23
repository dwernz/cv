var tom1 = new Audio("../sounds/drum-kit/tom-1.mp3");
var tom2 = new Audio("../sounds/drum-kit/tom-2.mp3");
var tom3 = new Audio("../sounds/drum-kit/tom-3.mp3");
var tom4 = new Audio("../sounds/drum-kit/tom-4.mp3");
var snare = new Audio("../sounds/drum-kit/snare.mp3");
var crash = new Audio("../sounds/drum-kit/crash.mp3");
var kick = new Audio("../sounds/drum-kit/kick-bass.mp3");

for(var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick() {
    
    var buttonInnerHTML = this.innerHTML;
    
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}

// Detecting Keyboard Press

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    
    switch(key) {
        case "w":
            tom1.play();
            break;
        case "a":
            tom2.play();
            break;
        case "s":
            tom3.play();
            break;
        case "d":
            tom4.play();
            break;
        case "j":
            snare.play();
            break;
        case "k":
            crash.play();
            break;
        case "l":
            kick.play();
            break;
        default:
            console.log(this.innerHTML);
            break;
    }
}


function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    
    activeButton.classList.add("pressed");
    
    setTimeout(function() {
       activeButton.classList.remove("pressed"); 
    }, 150);
}