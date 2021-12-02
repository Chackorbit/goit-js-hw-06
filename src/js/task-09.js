const btn = document.querySelector(".change-color");
const bgColor = document.querySelector(".color");

btn.addEventListener("click", function () {
  bgColor.style.backgroundColor = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
