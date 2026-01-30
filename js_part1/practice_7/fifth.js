// find the first student with grade A

grades = [
    {name: "Ashish", grade: "A"},
    {name: "Prem", grade: "B"},
    {name: "Birendra", grade: "A"},
    {name: "Kaley", grade: "C"},
    {name: "Taley", grade: "B"},
];

let first = grades.find(grade => grade.grade == "A");
console.log(first);