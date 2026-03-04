let startTime = null;

const startBtn = document.querySelector("#start");
const endBtn =document.querySelector("#finish");

startBtn.addEventListener("click", ()=> {
    startTime = new Date();
    console.log(`Session started at ${startTime.toLocaleTimeString()}`)

})

endBtn.addEventListener("click", ()=> {
    if (!startTime) {
        alert("Can't end before starting");
        return;
    }
    const endTime = new Date();
    const duration = endTime - startTime;
    const mins = Math.floor(duration / (1000 * 60)) 
    const secs = Math.floor(duration % (1000 * 60) / 1000) 

    console.log(`Total time worked is ${mins} Minutes and ${secs} Seconds`);
})