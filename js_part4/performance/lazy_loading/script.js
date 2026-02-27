document.addEventListener("DOMContentLoaded", () => {
    const lazyImages = document.querySelectorAll(".lazy-load");

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                
                // 1. Swap the data-src to the real src
                img.src = img.dataset.src;

                // 2. Wait for the browser to actually finish downloading
                img.onload = () => {
                    img.classList.add("loaded");
                };

                // 3. Stop watching this image
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: "0px 0px 100px 0px" // Load 100px before it enters the screen
        // root: null, threshold: 0.1 
    });

    lazyImages.forEach(image => imageObserver.observe(image));
});