// Predict:
console.log("10" + 1);  // 101
console.log("10" - 1);  // 9
console.log(true + false); // 1
console.log(!!"Sheryians"); // True because !! changes the value into boolean

//convert using unary
let str = "42";
let num = +str; // + converts into a number
console.log(num);

// ternary operator

let age = 18;
let answerr = age >= 18 ? "ELigible" : "Minor";

//build a basic calculator

function calc(a, b, operator) {
    let calculation = {
        "+": a + b,
        "-": a - b,
        "*": a * b,
        "/": a / b,
    }

    return calculation[operator] ?? "Invalid operator or value";
}

// Print "Excellent", "Good", "Average", or "Fail" based on ranges


function checkGrades(marks){
    if (marks>=80 && marks<=100) {
        console.log("excellent");
        
    } else if (marks>=60 && marks < 80) {
        console.log("good");
    } 
    else if (marks>=40 && marks < 60) {
        console.log("average");
    }
    
    else if (marks < 40) {
        console.log("Fail");
    }
    else
    {
        console.log("Invalid number");
    }
}