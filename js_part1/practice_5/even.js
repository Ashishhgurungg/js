// 10. Sum of even numbers in an array using for each


numbers = [1,2,3,4,6,];

let sum = 0;
numbers.forEach(element => {
    if (element % 2 == 0){
        sum = sum + element;
    }
});
console.log(sum);