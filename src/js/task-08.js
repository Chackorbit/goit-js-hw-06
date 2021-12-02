const form = document.querySelector(".login-form");
// const inputEmail = document.querySelector("email");
// console.log(inputEmail);

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const mail = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    mail,
    password,
  };
  if (formData.mail === "") {
    alert("Не тупи Бро, введи свой Email");
    return;
  } else if (formData.password === "") {
    alert("Без пароля не прокатит, придумай свой Пароль");
    return;
  }

  form.reset();
  console.log(formData);

  //   const formData = new FormData(event.currentTarget);
}
