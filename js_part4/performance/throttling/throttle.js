// throttle means the event should keep on firing when we are typing
// here type garirakhda harek 1 sec ma event vairarakhna paryo ani type garna chodesi banda huna paryo
//hint: we need to use date object
// delay time chai current time vanda thulo hunxa vane matra event fire hunxa

let input = document.querySelector("input");

function throttle(fnc, delay) {
    let lastTime = 0;

    return function (...args) {
        let currentTime = Date.now();
        if (currentTime - lastTime >= delay) {
            fnc(...args);
            lastTime = currentTime; // yaha k vaxa vaney 
            // delay chai hamle deko value vayo 1000 
            // current time chai manam 9000 xa re 
            // last time ko value 0 xa ani 9000 - 0 >= 1000(delay) which is true  so fnc chalxa
            // then lasttime ko value lai currenttime assign gardiyau
            // aba 9000 - 9000 ta 0 hunxa so fnc fire hunna but 1 sec paxi current time 10000 hunxa
            // ani if block chalxa 10000 ma 9000 ghatauda 1000 auxa so chalxa
            // tespaxi hamle function fire garxam ani last time chai 10000 hunxa ani feri 1 sec nahuda samma if block chaldena
        }
    }
}

input.addEventListener("input", throttle((e)=>{
    console.log("ran 1");
}, 1000));