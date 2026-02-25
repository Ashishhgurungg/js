//throttling

let input = document.querySelector("input");

function throttling(callback, delay) {
    let lastime =  0;
    return (...arg) => {
        let currentTime = Date.now();
        if (currentTime - lastime >= delay) {
            callback(...arg);
            lastime = currentTime;
        }
    }
}

input.addEventListener("input", throttling((e)=> {
    console.log("throttle");
},  1500));