let child = document.querySelector("#child");
let parent = document.querySelector("#parent");
let middle = document.querySelector("#middle");
let outpart = document.querySelector("#outside");

// capturing phase happens first than bubble phase but it is off by default
// we need it if we want like the parent event to get triggered first 
// then the button event when the event is same for both like that


//below here outpart has no role because it is not the part of the parent child heirarchy
//like we click so the hearchy will be fron top to the event initiator part .

child.addEventListener("click", () => {
    console.log("child is clicked");
});
middle.addEventListener("click", () => {
    console.log("middle is clicked");
}, true);
parent.addEventListener("click", () => {
    console.log("parent is clicked");
});
outpart.addEventListener("click", () => {
    console.log("outpart is clicked");
}, true);
// so here since we captured the middle as true so first middle will get triggered first
// then it will end at the last element and then come back doing the bubbling
// while bubbling middle will not happen because it has been executed at capture phase

//outside div will not work because it is outside the scope of event initiator 
// and has no relation there as parent and child
