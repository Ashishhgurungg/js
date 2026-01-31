// Convert object to array using Object.entries()

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

let newArr = Object.entries(student);
console.log(newArr);