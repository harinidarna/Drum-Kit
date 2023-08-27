var drums=document.querySelectorAll(".drum").length;

//button pressed event

for(var i=0;i<drums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

//keyboard key pressed event

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

//function to be called when button/key event happened

function makeSound(currentKey){

    switch (currentKey) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
        default:console.log();
    }
}

//animation when button pressed

function buttonAnimation(keyLetter){
    var pressedKey=document.querySelector("."+keyLetter);
    pressedKey.classList.add("pressed");
    setTimeout(function(){pressedKey.classList.remove("pressed");},100);
}