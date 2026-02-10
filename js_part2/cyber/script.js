const form = document.querySelector("#form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const success = document.querySelector("#success");

const lower = document.querySelector("#lower");
const upper = document.querySelector("#upper");
const number = document.querySelector("#number");
const length = document.querySelector("#length");
const strength = document.querySelector("#strength");

// restore username if exists
username.value = localStorage.getItem("username") || "";

// regex rules
const rules = {
    lower: /[a-z]/,
    upper: /[A-Z]/,
    number: /\d/,
    length: /.{8,}/,
};

// LIVE password validation
password.addEventListener("input", () => {
    let passed = 0;

    if (rules.lower.test(password.value)) {
        lower.classList.add("valid");
        lower.textContent = "✅ At least one lowercase letter";
        passed++;
    } else {
        lower.classList.remove("valid");
        lower.textContent = "❌ At least one lowercase letter";
    }

    if (rules.upper.test(password.value)) {
        upper.classList.add("valid");
        upper.textContent = "✅ At least one uppercase letter";
        passed++;
    } else {
        upper.classList.remove("valid");
        upper.textContent = "❌ At least one uppercase letter";
    }

    if (rules.number.test(password.value)) {
        number.classList.add("valid");
        number.textContent = "✅ At least one number";
        passed++;
    } else {
        number.classList.remove("valid");
        number.textContent = "❌ At least one number";
    }

    if (rules.length.test(password.value)) {
        length.classList.add("valid");
        length.textContent = "✅ At least 8 characters";
        passed++;
    } else {
        length.classList.remove("valid");
        length.textContent = "❌ At least 8 characters";
    }

    if (passed <= 1) {
        strength.textContent = "Password strength: Weak";
        strength.style.color = "#d93025";
    } else if (passed <= 3) {
        strength.textContent = "Password strength: Medium";
        strength.style.color = "#f9ab00";
    } else {
        strength.textContent = "Password strength: Strong";
        strength.style.color = "#188038";
    }
});

// submit validation
form.addEventListener("submit", (e) => {
    e.preventDefault();
    success.textContent = "";

    const userRegex = /^[a-zA-Z][a-zA-Z0-9_]{2,19}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!userRegex.test(username.value)) {
        alert("Invalid username");
        return;
    }

    if (!passwordRegex.test(password.value)) {
        alert("Password does not meet requirements");
        return;
    }

    localStorage.setItem("username", username.value);
    success.textContent = "Registration successful 🎉";
    form.reset();
});
