// . Destructure name and age from a student object
let student = {
    name: "Ashish",
    age: 28,
    address: {
        country: "Nepal",
        city: "Pokhara",
        location: {
            lat: 1,
            long:10,
        }

    }

}
let {name, age} = student;
console.log(name);
console.log(age);