var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0;i<numberOfDrumButtons;i++) {

document.querySelectorAll("button")[i].addEventListener("click",handleClick);

}

function handleClick() {
    this.style.color = "white";
    var x = this.innerHTML;
    makeSound(x);
    buttonAnimation(x);
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
    
})

function makeSound(x)
{
    if(x === "w")
    {
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
    }
    else if(x === "a")
    {
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
    }
    else if(x === "s")
    {
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
    }
    else if(x === "d")
    {
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
    }
    if(x === "j")
    {
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
    }
    if(x === "k")
    {
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
    }
    if(x === "l")
    {
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
    }
}
function buttonAnimation(x)
{
   var activeButton =  document.querySelector("."+x);

   activeButton.classList.add("pressed");
   setTimeout(function()
   {
     activeButton.classList.remove("pressed");
   },100)
}
// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();