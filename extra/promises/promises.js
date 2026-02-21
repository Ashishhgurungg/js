function getData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data) {
                resolve(`Data received: ${data}`);
            } else {
                reject('No data provided');
            }
        }, 2000)
    })      
};

let promiseExample = getData('data of ashish');
// promiseExample.then((res)=>{
//     console.log(" then shows resolved part", res)
// })
// promiseExample.catch((err)=>{
//     console.log("catch shows the error part", err);
// })


// or we can chain them
promiseExample.then((res)=>{
    console.log(" then shows resolved part", res)
}).catch((err)=>{
    console.log("catch shows the error part", err);
})