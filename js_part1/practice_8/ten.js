// Use a variable as a key using computed properties

// now to add this role variable in our object 
// we do computed properties which is this []

let role = "Admin";
let province = 1;
let student = {
    name: "Ashish",
    age: 28,
    [role]: "Ashish", // the value of role which is admin will come here
    address: {
        country: "Nepal",
        city: "Pokhara",
        province: province, // for values we can directly use the variable name
        location: {
            lat: 1,
            long:10,
        }

    }
}

console.log(student);



