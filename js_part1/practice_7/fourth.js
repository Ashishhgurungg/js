// Reduce salaries to calculate total payroll

let threeSalary = [30000, 30000 + 350000 ];

let totalSalary = threeSalary.reduce((total, salary) => {
    return  total += salary;
}, 0);

//early return pattern

let finalSalary = threeSalary.reduce((total, salary) => total + salary, 0); // can also write total += salary

console.log(totalSalary);
console.log(finalSalary);