//Declare your name and city using const, and your age using let

const naame = "Ashish";
const city = "Pokhara";
let age = 28;

console.log(naame, city, age);

// observe the result

let x = 5;
let x= 10; // output will be x has already been declared

// guess the output

console.log(count);
var count = 42; // output will be undefined

// create a const object and add a new key to it - does it work?

const obj = {
    name: "ashish"
}

obj.age = 27; // yes it will work

// Try accessing a let variable before declaring it - what error do you see?

console.log(a);
let a = 1; // output will be reference error, a is not defined

// Change a const array by pushing a value. Will it throw an error?
const numberr = [1,2,4,5];
numberr.push(7); // no error number 7 will be added as const can be modified but the variable cannot be redeclared


// ✅ Key Takeaways (JavaScript var, let, const)

// Use const by default
// Choose const when the variable value should not be reassigned.

// Use let when reassignment is needed
// let allows changing values but does not allow redeclaration in the same scope.

// Avoid var
// var is hoisted and returns undefined when accessed before assignment, which can cause bugs.

// Redeclaration rules matter

// let and const → ❌ cannot be redeclared

// var → ✅ can be redeclared (unsafe)

// Hoisting behavior differs

// var → hoisted with value undefined

// let & const → hoisted but stuck in the Temporal Dead Zone (TDZ)

// const does NOT make data immutable

// Objects and arrays declared with const can be modified

// Reassigning the variable itself is ❌ not allowed

// Accessing let/const before declaration throws an error

// Results in ReferenceError

// Changing a const array or object is allowed

// Pushing to arrays or adding object properties works fine

// Modern JavaScript best practice

// Use const and let

// Avoid var entirely