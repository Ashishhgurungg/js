//  Filter even numbers from an array

let numbers = [2,5,6,8,9,23,56,88];

console.log(numbers.filter(num => num % 2 == 0));
console.log(numbers.filter((num) => {
    return num % 2 == 0;
}));
console.log(numbers);