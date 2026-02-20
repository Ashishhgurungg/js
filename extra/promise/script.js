let trial = new Promise(function(resolve, reject) {
        resolve('you are adult');
        reject('you are a kid');
});

trial.then((value) => {
    console.log(value);
}, (error) => {
    console.log(error);
})
