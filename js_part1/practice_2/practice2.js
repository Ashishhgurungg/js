// 1. Predict the output:
console.log(null + 1); // 1     
console.log("5" + 3);  // 53    
console.log("5" - 3);  // 2  
console.log(true + false); // 1

console.log(typeof []); //object
console.log(typeof null);// object its a bug
console.log(typeof 123n); // bigint

// Write a function isEmpty(value) that checks if a given value is null, undefined or "".

function isEmpty(value) {
    let type = typeof(value);
    if (value === null) {
        return "it is null";
    } else if (value === undefined) {
        return "it is undefined";
    } else if (value === "") {
        return "it is empty string";
    } else {
        return type;
    }
}

