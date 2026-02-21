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

wakeup("ashish")
    .then((user) => eatBreakfast(user))//resolve has user so user is passed , we did not write then(resolve) because then(user) will be convenient to read
    .then((breakfast) => ready('John', breakfast))
    .then((clothes) => wornClothes('John', clothes))
    .then((message) => console.log(message));