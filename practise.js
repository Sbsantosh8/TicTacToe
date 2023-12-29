let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";
modeBtn.addEventListener("click",() => {
  body.classList.toggle("light")
  body.classList.toggle("dark")
console.log(currMode);

});


