// debouncing concept
// event will after 2 second if the user stops typing
// for this to happen hamle input ma eventlistener halxam ani even listener chai 2 sec paxi chalxa 
// event harek type ma fire vairako hunxa
//  tara to make it give after the user stops for 2 sec
// hamle timeout chai 2 sec rakhxam ani tyo time chai feri 0 bata hunxa if we re type before 2 sec

let input = document.querySelector("input");

function debounce(fnc, delay) {
    let timer;
    return function (...arg) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fnc(...arg);
        }, delay);
    }
}

input.addEventListener("input", debounce((e)=>{
    console.log(e.target.value);
}, 2000));
