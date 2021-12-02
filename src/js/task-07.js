const input = document.querySelector("#font-size-control");
const sizeText = document.querySelector("#text");

input.addEventListener("input", (fs) => {
  sizeText.style.fontSize = fs.currentTarget.value + "px";
});
