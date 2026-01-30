// destructure an array


let numbers = [2,34,6,8,9];

let [first, second, ...remaining] = numbers;

console.log(numbers);
console.log(first);
console.log(second);
console.log(remaining);
//to skip a number let [first, , third] = numbers;

// let [first, , third] = numbers;
// console.log(third);
