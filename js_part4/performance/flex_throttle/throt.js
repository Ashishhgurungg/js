// hamle type gareko 1 second ma hey print hos

let input = document.querySelector(".type");
let divs = document.querySelectorAll(".child");

function throttle(fnc, delay) {
    let lastTime = 0;
   return function (...args) {
        let inputTime = Date.now();
        if (inputTime-lastTime>= delay) {
            fnc(...args);
            lastTime = inputTime;
        }

   }
}



input.addEventListener("input", throttle(function(e){

    divs.forEach((div) => {
        div.textContent = e.target.value;
    })
},500));
