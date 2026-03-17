window.addEventListener("wheel", (e) => {
    if (e.deltaY > 0) {
        gsap.to(".marquee", {
            x: "-200%",
            repeat: -1,
            duration: 3,
            ease: "none",
        });
        gsap.to(".marquee img", {
            rotate: 180,
        })
    }
        if (e.deltaY < 0) { 
            gsap.to(".marquee", {
                x: "0%",
                repeat: -1,
                duration: 4,
                ease: "none",
            });

            gsap.to(".marquee img", {
                rotate: 0,
            })
        }

});