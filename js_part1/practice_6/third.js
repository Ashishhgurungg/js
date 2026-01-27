//sum of all numbers using rest

//rest and spread are just same but it depends on the context what it is called.
// when we use ... in a array or object then it spreads it
// when we use ... in individual items then it combines it into a array.
// can unpack array and objects but when packing individual items it is packed into an array

let numbers = [1,2,3,4,5];

function arraySum(...value) {
    let sum = value.reduce((holder, current) => {
        return holder + current;
    }, 0)

    return sum;
}

function another(...value) {
    let sum = 0;
    value.forEach(element => {
        sum = sum + element;
    });
    return sum;
}

console.log(another(1,2,3));
console.log(arraySum(...numbers));

// both function is correct but if we don't pass arguement as a rest
// but the function works if we pass 1,2,3 because rest converts it as an array
// but if we pass numbers then it is already and array so the array will be converted into a nested array
//[[1,2,3,4,5]] like this