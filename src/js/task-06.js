const input = document.querySelector("#validation-input");

input.addEventListener("blur", function () {
  if (input.dataset.length.includes(input.value.length)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
    return;
  }
  input.classList.add("invalid");
  input.classList.remove("valid");
});
console.log(input);
console.log(input.dataset.length);
