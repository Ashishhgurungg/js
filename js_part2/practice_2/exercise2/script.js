const input = document.querySelector("#taskInput");
const button = document.querySelector("#addTaskButton");
const ul = document.querySelector("#taskList");
const parent = document.querySelector(".parent");

const listAdder = () => {
    if (input.value.trim() === "") return;
    const newLi = document.createElement("li");
    const deleteButton = document.createElement("button");
    newLi.textContent = input.value;
    newLi.classList.add("list");
    deleteButton.classList.add("delete");
    deleteButton.innerText = "Delete";
    newLi.append(deleteButton);
    ul.append(newLi);
    input.value = "";
    input.focus();

}

button.addEventListener("click", listAdder);
//both of them are correct but above one is cleaner and we don't need to call as the second parameter is always called
// button.addEventListener("click", () => {
//     listAdder();
// })



input.addEventListener("keydown", (e) => {
    if(e.key == "Enter"){
        listAdder();
    }
})

parent.addEventListener("click", (e) => {
    if(e.target.matches(".delete")) {
        e.target.closest("li").remove(); // deletes the closest li tag and is the best practice
        // e.target.parentElement.remove(); //deletes the parent element of the button which is the li
    }
})