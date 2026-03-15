gsap.to("#page2 h1", {
    transform: "translateX(-150%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        markers: true,
        start: "top 5%",
        end:"top -150%",
        scrub:4,
        pin:true
    }
})