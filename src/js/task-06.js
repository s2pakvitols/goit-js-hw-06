const inputTextEl = document.querySelector("#validation-input");
inputTextEl.placeholder = `Please enter ${inputTextEl.dataset.length} symbols`;

inputTextEl.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length == inputTextEl.dataset.length) {
    inputTextEl.className = "valid";
  } else {
    inputTextEl.className = "invalid";
  }
});
