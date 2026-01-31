// Create a deep copy of an object with nested structure

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

let deepCopiedStudent = JSON.parse(JSON.stringify(student));


deepCopiedStudent.address.country = "USA";
console.log(deepCopiedStudent);
console.log(student);