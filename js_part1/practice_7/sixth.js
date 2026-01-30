//write a function to reverse an array

// ***** IMPORTANT: so my key takeway was actually that the push method adds the value to the array
//  but it returns the length of an array
//  so if we store it in a varaible then it gives the length value
// METHODS DO SOMETHING BUT RETURNS SOMETHING SO
// DON'T EXPECT IT RETURN AN ARRAY OR OBJECT IT CAN RETURN ANYTHING AS PER THE JS RULES*****




//this one reverse a string
function reverse(value) {
    let reversed = "";
    for (let index = value.length - 1; index >= 0 ; index--) {
        reversed = reversed + value[index];   
    }
    return reversed;
}

console.log(reverse("ashish"));

// this one reverses a array
function reverseArray(value) {
    let reversed = [];
    for (let index = value.length - 1; index >= 0 ; index--) {
        reversed.push(value[index]);   
    }
    return reversed;
}
console.log(reverse([3,4,8,9]));
