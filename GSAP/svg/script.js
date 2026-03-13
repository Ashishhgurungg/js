var path = `M 10 100 Q 500 100 1550 100`;
var finalPath = `M 10 100 Q 500 100 1550 100`;

var string = document.querySelector("#string");
// ${e.clientY}
string.addEventListener("mousemove", (e) => {
    path = `M 10 100 Q ${e.offsetX} ${e.offsetY} 1550 100`;

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
