// . Create a closure counter function

function counter(params) {
    let count = 0;

    return () => {
        return count++;
    }
}

let counterFunction = counter();

console.log(counterFunction());
console.log(counterFunction());
console.log(counterFunction());
console.log(counterFunction());