let form = document.querySelector("#form");
let tasks = document.querySelector("#task");
let list = document.querySelector("ul");
let removeButton = null;

form.addEventListener("submit",(event) => {
    event.preventDefault(); // this stops page refresh

    let todo = document.createElement("li");
    todo.innerText = tasks.value;
    list.appendChild(todo);
    tasks.value = "";
    // let numberOfTask = list.querySelectorAll("li").length;
    if (!removeButton) {
        removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        form.appendChild(removeButton);
        removeButton.addEventListener("click", () => {
            list.innerHTML = "";
        })
    }

});