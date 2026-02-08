const button = document.querySelector(".buttons");
const number = document.querySelector("#number");
const alertBox = document.querySelector("#alert");

let value = 0;
let interUp = null;
let interDown = null;

function boxToggle() {
    alertBox.classList.add("show");
    setTimeout(() => {
        alertBox.classList.remove("show");
    }, 3000);
}

button.addEventListener("click", (e) => {

    if (interUp || interDown) return;

    // COUNT UP
    if (e.target.matches("#up")) {
        value = 0; // reset at start
        number.textContent = value;

        interUp = setInterval(() => {
            number.textContent = value;

            if (value === 10) {
                clearInterval(interUp);
                interUp = null;
                boxToggle();
                return;
            }

            value++;
        }, 1000);
    }

    // COUNT DOWN
    if (e.target.matches("#down")) {
        value = 10; // reset at start
        number.textContent = value;

        interDown = setInterval(() => {
            number.textContent = value;

            if (value === 0) {
                clearInterval(interDown);
                interDown = null;
                boxToggle()
                return;
            }

            value--;
        }, 1000);
    }
});

