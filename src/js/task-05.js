const formEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");
formEl.addEventListener("input", (event) => {
  console.log(event.currentTarget.value);
    if (!event.currentTarget.value) {
      spanEl.textContent = event.currentTarget.value;
  } else {
    spanEl.textContent = "Anonymous";
  }
});
