const form = document.querySelector("#form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

const userError = document.querySelector("#userError");
const passwordError = document.querySelector("#passwordError");
const success = document.querySelector("#success");

username.value = localStorage.getItem("username");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;
    userError.style.display = "none";
    passwordError.style.display = "none";
    success.textContent = "";


    const userRegex = /^[a-zA-Z][a-zA-Z0-9_]{2,19}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;


    if (!userRegex.test(username.value)) {
        userError.style.display = "block";
        isValid = false;
        
    }
    
    if (!passwordRegex.test(password.value)) {
        passwordError.style.display = "block";
        isValid = false;
    }

    if (isValid) {
        success.textContent = "All valid";
        localStorage.setItem("username", username.value);
    }
})
