// use optional chaining to safely access deep values

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
// optional chaining is used to hide error like  if there is area below
// then it will outpiut area if there is no area then it will show undefined.

console.log(student?.address?.city);
console.log(student?.address?.area);