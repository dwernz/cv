var audio1 = new Audio("../sounds/drum-kit/tom-1.mp3");
var audio2 = new Audio("../sounds/drum-kit/tom-2.mp3");
var audio3 = new Audio("../sounds/drum-kit/tom-3.mp3");
var audio4 = new Audio("../sounds/drum-kit/tom-4.mp3");
var audio5 = new Audio("../sounds/drum-kit/snare.mp3");
var audio6 = new Audio("../sounds/drum-kit/crash.mp3");
var audio7 = new Audio("../sounds/drum-kit/kick-bass.mp3");

for(var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick() {
    
    if(this.innerHTML == "w") {
        audio1.play();
    }
    else if(this.innerHTML == "a") {
        audio2.play();
    }
    else if(this.innerHTML == "s") {
        audio3.play();
    }
    else if(this.innerHTML == "d") {
        audio4.play();
    }
    else if(this.innerHTML == "j") {
        audio5.play();
    }
    else if(this.innerHTML == "k") {
        audio6.play();
    }
    else if(this.innerHTML == "l") {
        audio7.play();
    }
    
}