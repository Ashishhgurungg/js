let text = document.querySelector("#text");
let span = document.querySelector("span");

text.addEventListener("input", (e) => {
    // let length = e.target.value.length;
    span.textContent = text.value.length;
    // span.textContent = e.target.value.length;
});