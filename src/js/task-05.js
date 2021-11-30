const input = document.querySelector("#name-input");
console.log(input);

const output = document.querySelector("#name-output");
console.log(output);

input.addEventListener("input", function () {
  if ((output.innerHTML = input.value)) {
    return;
  }
  output.textContent = "Anonymous";
});
