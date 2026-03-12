// gsap.from(".nav1", {
//     opacity: 0,
//     duration: 2,
//     delay: 0.5,
//     ease: "bounce.out"
// })
// gsap.from(".nav2", {
//     opacity: 0,
//     duration: 2,
//     delay: 2,
//     ease: "bounce",
// })

var tm = gsap.timeline();

tm.from(".nav1", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    // ease: "bounce.out"
})

tm.from(".nav2 h4", { // used h4 because we want to animate each h4 separately and stagger only works if we have multiple elements
    y: -30,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    // ease: "bounce.out"
})