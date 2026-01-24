// 8. Guess number game – use while to ask until correct

let guess;
let correctNumber = 10;

while (guess !== correctNumber) {
    guess = Number(prompt("enter a number"));
    if (guess == correctNumber){
        console.log("You got it");
    }
}

//or 
//  const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let guess;
// let correctNumber = 10;

// function ask() {
//   rl.question("enter a number: ", (input) => {
//     guess = Number(input);

//     if (guess === correctNumber) {
//       console.log("You got it 🎉");
//       rl.close();
//     } else {
//       ask(); // this replaces the while loop
//     }
//   });
// }

// ask();
