arr = [1,2,3,4];
const [a, ...rest] = arr;   // REST because it is collecting
// In const [a, ...rest] = arr, ...rest looks like spreading,
// but the important part is that rest is collecting the remaining values, so this is REST, not spread.


students = ["ashish", "jennie", "aiyana"];
const newArr = [...students];   // SPREAD because it is spreading the value


const even = [2, 4, 6];
function add(...numbers) {
    let sum = 0;

    //inside the function, ...numbers is REST 
    // because it is collecting all the arguments into an array called numbers
    // sp we are using a for...of loop to iterate over the numbers array and calculate the sum
    for (let num of numbers) {
        sum += num;
    }    console.log(sum);
}
add(...even, 8, 10)

// Same ..., different job
// Calling a function → SPREAD
// Receiving parameters → REST