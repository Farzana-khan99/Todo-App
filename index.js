let input = document.getElementById("inputs");
let text = document.querySelector(".text");
let btn = document.querySelector("#add");

function Add() {
  if (input.value === "") {
    alert("please enter");
  } else {
    let ElementText = document.createElement("ul");
    ElementText.innerHTML = `${input.value} <i class="fa-solid fa-trash"></i> `;
    text.appendChild(ElementText);
    input.value = "";
    ElementText.querySelector("i").addEventListener("click", removeFun);

    function removeFun() {
      ElementText.remove();
    }
  }
}
