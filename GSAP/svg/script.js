var path = `M 10 200 Q 500 200 1550 200`;
var finalPath = `M 10 200 Q 500 200 1550 200`;

let cursor = document.querySelector("#cursor");
let container = document.querySelector("#container");

var string = document.querySelector("#string");
// ${e.clientY}
string.addEventListener("mousemove", (e) => {
    path = `M 10 200 Q ${e.offsetX} ${e.offsetY} 1550 200`;

    gsap.to("svg path", {
        attr: {
            d: path
        },
        // ease: "power3.out", //power3.out
        duration: 0.2
    })
})

string.addEventListener("mouseleave", (e) => {
    gsap.to("svg path", {
        attr: {
            d: finalPath
        },
        // ease: "power3.out",
        duration: 1,
        ease: "elastic.out(1, 0.1)"
    })                               
})

window.addEventListener("mousemove", (e) => {


    gsap.to(cursor, {
        x: e.x,
        y: e.y,

    })
})

container.addEventListener( "mouseover", ()=> {
 cursor.textContent = "String";
 gsap.to(cursor, {
    scale:2
 })
})