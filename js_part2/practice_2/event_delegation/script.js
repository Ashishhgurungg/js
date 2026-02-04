const addBoxButton = document.querySelector("[data-add-box]");
const grid = document.querySelector(".grid");
const boxes = document.querySelectorAll(".box");

addBoxButton.addEventListener("click", () => {
    const box = document.createElement("div");
    box.classList.add("box");
    grid.append(box);
});



// document.addEventListener("click", (e) => {
//     if (e.target.matches(".box")) {
//         // console.log("matched");
//         e.target.classList.toggle("clicked");
//     }
// });
// Only delegation in certain area

grid.addEventListener("click", (e) => {
    if (e.target.matches(".box")) {
        // console.log("matched");
        e.target.classList.toggle("clicked");
    }
});

// boxes.forEach(box => {
//     box.addEventListener("click", e => {
//         box.classList.toggle("clicked");
//     })
// });


//USING HERE WITH HELPER FUNCTION AND FIRST CLASS FUNCTION

// function addGlobalEventListener(type, selector, callback) {
//     document.addEventListener(type, (e) => {
//     if (e.target.matches(selector)) {
//         callback(e)
//     }
// });
// }

// addGlobalEventListener("click", ".box", (e) => {
//     e.target.classList.toggle("clicked");
// })

