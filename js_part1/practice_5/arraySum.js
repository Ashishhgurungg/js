// Sum of all numbers in an array

function arraySum(value) {
    let sum = 0;
    for (let index = 0; index < value.length; index++) {
        sum = sum + value[index];
    }
    return sum;
}

console.log(arraySum([1,2,3]));