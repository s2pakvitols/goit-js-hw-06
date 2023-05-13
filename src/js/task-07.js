const textForResizeEl = document.querySelector("#text");
const controlSiseTextEl = document.querySelector("#font-size-control");
controlSiseTextEl.addEventListener('input', (event) => { 
     textForResizeEl.style.fontSize = `${event.target.value}px`;
})