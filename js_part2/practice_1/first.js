//

let header = document.querySelector(".h1");
header.innerHTML = "<i> Hey Ashish </i>"; // changed text to italic

let image = document.querySelector(".img");
// changed image source and alt text
image.setAttribute("src", "https://images.unsplash.com/photo-1769226146862-6f0b1dcaddd7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
image.setAttribute("alt", "Family picture");
// created h2 element with alt text and appended to body
let message = image.getAttribute("alt");
let h2 = document.createElement("h2");
h2.innerText = message;
document.body.appendChild(h2); 
// prepend is there to add at the beginning which can also add plain text to the body


h2.style.color = "red"; // changes the color to red
// use console.dir to see the names of styles i can change using js

let firstDiv = document.createElement("div");
firstDiv.classList.add("fcontainer");
document.body.appendChild(firstDiv);

let p = document.createElement("p");
p.classList.toggle("fparagraph"); // we can use toggle as well so 
// toggle means xa vaney faldey, xaena vandey haldey
firstDiv.appendChild(p);  

p.innerText = "This is my family photo reference";






