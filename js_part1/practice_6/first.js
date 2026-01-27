// write a bmi calculator function

function bmiCalculate(weight, height) {
    let value = weight/height**2;
    return `your BMI is ${value}`;
}

console.log(bmiCalculate(70, 1.71));