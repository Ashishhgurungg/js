let child = document.querySelector("#child");
let parent = document.querySelector("#parent");
let middle = document.querySelector("#middle");

//event must be same for event bubbling 
child.addEventListener("click", () => {
    console.log("child is clicked");
});
middle.addEventListener("keyup", () => {
    console.log("middle is clicked");
});
parent.addEventListener("click", () => {
    console.log("parent is clicked");
});

// middle will not get triggered because the event is different
// but the bubbling will not be stopped and will go to the top parent