// 5. Loop through keys and values of an object
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
for (const key in student) {
    
    console.log(key, student[key]);
    
}