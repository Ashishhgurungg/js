// 3. Reverse a string using loop
let value = "Ashish";
for (let index = value.length - 1; index >= 0; index--) {
    console.log(value[index]);
}

for (const key of value) {
    console.log(key);
}

// another way

let str = "hello";
let reversed = "";

for (let char of str) {
    reversed = char + reversed; // the character get prepended and stored like a stack 
    // so it gets reversed
}

console.log(reversed);
