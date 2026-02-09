const button = document.querySelector("#theme-toggle");
const body = document.querySelector("body");

if (localStorage.getItem("theme") === "dark-mode") {
    body.classList.add("dark-mode");
}
button.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        localStorage.removeItem("theme");
    }
    else{
        localStorage.setItem("theme", "dark-mode");
        body.classList.add("dark-mode");
    }
})
