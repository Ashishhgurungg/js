const wakeup = (user) => {
    return new Promise((resolve, reject) => {
        if (user) { 
            console.log(`${user} wakes up`);
            setTimeout(() => resolve(user), 2000);
        }
        else{
            reject('No user found');
        }
    });
};

const eatBreakfast = (user) => {
    return new Promise((resolve) => {
        setTimeout(() => console.log(`${user} is eating breakfast...`), 2000);
        setTimeout(() => resolve(['coffee', 'eggs', 'avocado']), 4000);
    });
};

const ready = (user, breakfast) => {
    return new Promise((resolve) => {
        setTimeout(() => console.log(`${user} ate ${breakfast}`), 2000);
        setTimeout(() => console.log(`${user} is getting ready`), 4000);
        setTimeout(() => resolve(['tie', 'suit', 'pant', 'boots']), 6000);
    });
};

const wornClothes = (user, clothes) => {
    return new Promise((resolve) => {
        setTimeout(() => console.log(`${user} is wearing ${clothes}`), 2000);
        setTimeout(() => resolve(`${user} is ready to go!`), 4000);
    });
}

(async function () {
    try {
        const user = await wakeup("ashish"); //user variable has ashish now because resolve returns user
        const breakfast = await eatBreakfast(user); // break fast variable has coffee,eggs so on because resolve returns it
        const clothes = await ready(user, breakfast); // in arguement we are passing the exact variable , user has ashish and breakfast has coffee etc
        const message = await wornClothes(user, clothes); // at the end relove returns a message 
        console.log(message);// we console the last message
    } catch (error) {
        console.log(error);
    }
})();