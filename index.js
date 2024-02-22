function makeSound(key) {
  switch (key) {
    case "w":
      let crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "a":
      let tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "s":
      let tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "d":
      let tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "j":
      let tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "k":
      let kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    case "l":
      let snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
  }
}
function animtion(key) {
  let activeElement = document.querySelector("." + key);
  activeElement.classList.add("pressed");
  setTimeout(()=>{
    activeElement.classList.remove("pressed")
  },100)
}
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    animtion(buttonInnerHtml);
  });
}
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  animtion(event.key);
});
