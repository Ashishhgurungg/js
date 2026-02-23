let input = document.querySelector("input");

function debounce(fnc, delay) {
    let timer;

    // The '...args' here is the REST operator. 
    // It captures all arguments passed to this function into an array.
    return function(...args) {// this args is needed so we can collect the event object here
        // so here rest ... is used because for safety because in future we may use it to accept mutliple objects in here
        // Clear the previous timer if the user is still typing/acting
        clearTimeout(timer);

        // Start a new timer
        timer = setTimeout(() => {
            // The '...args' here is the SPREAD operator.
            // It "unpacks" the array back into individual arguments for fnc.
            fnc(...args); // we return the collected event object back to the function inside the debounce
        }, delay);
    };
}

// Usage:
//event 
input.addEventListener("input", debounce(function(e) { //the e here in line 22 gets data from the ..args
    console.log("Input value:", e.target.value);
    console.log(e);
}, 1000));