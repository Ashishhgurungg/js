function wakeup(user, callback) {
    console.log(`${user} wakes up`);
    setTimeout(() => {
        callback(user);
    }, 2000);
}

function eatBreakfast(user, callback) {
    setTimeout(() => {
        console.log(`${user} is eating breakfast...`);
    }, 2000);
    setTimeout(() => {
        callback(['coffee', 'eggs', 'avocado'])
    }, 4000);
   
}

function ready(user, callback) {
    setTimeout(() => {
        
        console.log(`${user} is getting ready`);
    }, 2000);
    setTimeout(() => {
        callback(['tie', 'suit', 'pant', 'boots'])
    }, 4000);
}

wakeup("Krish", function (user) {
    console.log(`${user} gets fresh`);
    eatBreakfast(user, function (breakfast) {
            console.log(`the breakfast items are ${breakfast}`)
            ready(user, function (dress) {
                console.log(`wearing items are: ${dress}`);
                setTimeout(() => { 
                    console.log(`${user} time to go`);
                }, 2000);
            });
    });
});