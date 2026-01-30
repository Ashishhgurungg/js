// check if any student failed using some() method

students = [
    {name: "Ashish", status: "Pass"},
    {name: "ben", status: "Fail"},
    {name: "Jeni", status: "Pass"},
    {name: "Jaaz", status: "Fail"},
]

let failed = students.some((student) => student.status == "Fail") ? "Some students failed" :"All of them passed";
console.log(failed);
