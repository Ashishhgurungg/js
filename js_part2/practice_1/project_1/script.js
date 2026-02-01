
studentArray = ["Ashish", "Sumit", "bigyan", "sandip", "harry", "Rustam", "Nisan"];
let container = document.querySelector(".container");

let students = document.querySelector(".students");



studentArray.forEach(student => {
    let newStudent = document.createElement("li");
    newStudent.innerText = student;
    students.appendChild(newStudent);
});