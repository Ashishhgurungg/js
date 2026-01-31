// Copy an object using spread operator


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
//this is shallow copy

let newStudent = {...student};
newStudent.address.country = "USA";
console.log(newStudent);
console.log(student);