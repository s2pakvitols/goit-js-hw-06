const formEl = document.querySelector(".login-form");

const resultObject = {};

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені!");
  } else {
    resultObject.email = email.value;
    resultObject.password = password.value;

    console.log(resultObject);
  }

  if (!email.value === "" || !password.value === "") {
    event.currentTarget.reset();
  }
}
