// create a function that returns another function

function functionReturner() {
    return () =>{
        console.log("I am returned");
    }
}

let returned = functionReturner();

returned();