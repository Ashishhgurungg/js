// sort array of ages in ascending order

ages = [32, 15, 8, 49, 25, 12];

ages.sort((a, b) => a - b);

console.log(ages);

// for descending write b - a
// actually if we write(z, a) then we write a - z for asc and z -a for desc
// whichever arguement is at the back if we write front then it becomes desc

// for strings we can do like names.sort((a, b) => a.localeCompare(b));

names = ["bipin", "kripa", "ashish", "daniel"];

names.sort((a,b) => a.localeCompare(b));
console.log(names);
names.sort((a,b) => b.localeCompare(a));
console.log(names);

//objects example

const people = [
    { name: "Ashish", age: 22 },
    { name: "Bina", age: 19 },
    { name: "Chirag", age: 25 }
];
people.sort((a, b) => a.age - b.age);
console.log(people);
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);


