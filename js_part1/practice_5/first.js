
for (let i = 0; i < 5; i++) {
    console.log(i);
} // output is 0 1 2 3 4

// Note: The increment at the start of paranthesis happens
// after each iteration of the loop block, not after the entire loop finishes.

for (let i = 0; i < 5; i++) {
    console.log(++i);
} // output will be 1, 3, 5 here , what is happening so first i is zero then when code 
// goes to console part it prints 1 due to ++ ahead and value of i is zero
// then when the block ends then the i++ part is executed and i now becomes 2
// now i is 2 and when it comes to the console.log part then it prints 3 
// and when the block ends it becomes 4 and when the condition checks 4 is still less than 5 
// and the console part comes and it prints 5 and when the block ends it becomes 6 
// and then the loop won't run since 6 is greater than 5 



//print numbers from 1 to 10

for (let a = 1; a<=10; a ++){
    console.log(a);
}