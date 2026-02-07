const button = document.querySelector(".buttons");
const number = document.querySelector("#number");
let value = 0;
let interUp = null;
let interDown = null;

button.addEventListener("click", (e) => {

    if (interUp || interDown) return;
    if (e.target.matches("#up")) {
        interUp = setInterval(() => {
            if (value > 10) {
                clearInterval(interUp);
                interUp = null;
                value = 0;
                return;
            }
            number.textContent = value++;
        }, 1000);

    }
    if (e.target.matches("#down")) { 
        value = 10;
        interDown = setInterval(() => {
            if (value < 0) {
                clearInterval(interDown);
                value = 0;
                interDown = null;
                return;
            }
            number.textContent = value--;
        }, 1000);
    }
})