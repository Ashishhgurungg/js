function wait(sec) {
    return new Promise((resolv, rejec) => {
        if (sec < 0) {
            rejec("Error: delay cannot be negative");
        }
        else
        {
            setTimeout(() => {
                resolv(`waited for ${sec}`);
            }, sec * 1000);
        }
    })
}

//old style 
wait(3).then((message) => {
    console.log(message);
});

//new style
async function delay() {
    try {
        console.log("starting timer");
        const first = await wait(5);
        console.log(first);

        console.log("now second that has erro");
        const second = await wait(-1);
        console.log(second);
        
    } catch (err) {
        console.log("error occured: ", err);
    }

    finally{
        console.log("the task is completed");
    }
}

delay();

