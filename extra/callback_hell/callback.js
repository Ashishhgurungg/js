//callback is used in event handling like form.addEventlistener("submit", feedData)
//callback is used so that we can take control over stuffs 
//example

function displayResult(sum) {
    document.querySelector("h3").textContent = sum;
}
// displayResult(total);

// const total = addd(1,2);

//we needed to display the two function separately but to solve that we can make callback
function addd(a,b, callback) {
    let sum = a + b;
    if (callback) {  
        callback(sum);
    }
    return sum;
}
//so if we want to display we can include callback function in addd function while calling
// if we don't want then don't pass the callback function

addd(2,3);


