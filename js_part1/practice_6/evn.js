//. Use a function to log even numbers in array

function logEven(...value){
    let numbers = [];

    value.forEach(e => {
        if (e % 2 == 0){
            numbers.push(e);
        }
    })

    return numbers;
}

console.log(logEven(1,2,3,4,5,6));
