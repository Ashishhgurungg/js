const addTask = document.querySelector("#add");
const tasks = document.querySelector("#tasks");
const value = document.querySelector("#inputTask");

add.addEventListener("click", () => {
    let newTask = document.createElement("li");
    let del = document.createElement("button");
    let edit = document.createElement("button");
    let input = document.createElement("input");

    input.classList.add("update");
    input.style.display = "none";

    del.textContent = "Delete";
    del.classList.add("delete");

    edit.textContent = "Edit";
    edit.classList.add("edit");

    newTask.textContent = value.value;
    newTask.append(del, edit, input);
    tasks.appendChild(newTask);

    value.value = "";
})

tasks.addEventListener("click", (e) =>{
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    }

    if (e.target.classList.contains("edit")) { 
        let parent = e.target.parentElement;
        let input = parent.querySelector("input");
        input.style.display = "initial";

        let saveButton = document.createElement("button");
        saveButton.classList.add("saveButton");
        saveButton.textContent = "Update";
        parent.appendChild(saveButton);
        }
    
    if (e.target.classList.contains("saveButton")) {
        let parent = e.target.parentElement;

        let newValue = parent.querySelector("input");
        parent.childNodes[0].textContent = newValue.value;
        newValue.style.display = "none";
        parent.removeChild(parent.querySelector(".saveButton"));
    }
    
})