let texts = document.querySelector("h1");

let textArray = texts.textContent.split("");

console.log(textArray)
let value = "";
textArray.forEach((text)=>{
    value = value + `<span>${text}</span>`;
});

texts.innerHTML = value;
console.log(texts)

gsap.from("h1 span", {
    duration: 1.2,
    delay: 0.5,
    y: 70,
    stagger: 0.2,
    opacity: 0,
    ease: "power3.out",
})

