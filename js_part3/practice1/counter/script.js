let countValue = document.querySelector("#counter");
const buttons = document.querySelector("#buttons");

function incDec() {
    let numValue = 0;

    return (e) => {
        if (e.target.matches("#increment")) {
            numValue += 1;
        }
        if (e.target.matches("#decrement")) {
            numValue -= 1;
        }
        countValue.textContent = numValue;
    }
}

let Counter = incDec();

buttons.addEventListener("click", Counter);


// below is a simple version


// buttons.addEventListener("click", (e) => {
//     // let value = number(countValue.textContent); // we can do this so that bugs will be avoided
//     // textContent is actually string so we need to change it into number so we can do this for better
//     // if we do count.textContent + 1 without using number() then it will cause concatenation
//     // so below it works because ++ -- handels it itself

//     if (e.target.matches("#increment")) {
//         countValue.textContent++
//     }
//     if (e.target.matches("#decrement")) {
//         countValue.textContent--;

//     }
// });

