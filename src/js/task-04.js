const buttonLinkDecEl = document.querySelector('[data-action="decrement"]');
const buttonLinkIncEl = document.querySelector('[data-action="increment"]');
let counterValue = 0;
const valueShowEl = document.querySelector("#value");

buttonLinkDecEl.addEventListener('click', () => { 
    counterValue -= 1;
    valueShowEl.textContent = counterValue
}
)

buttonLinkIncEl.addEventListener('click', () => {
    counterValue += 1;
    valueShowEl.textContent = counterValue
}
)