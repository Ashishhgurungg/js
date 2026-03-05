// user le 30 second samma kei activity garena vaney session delete gardine

function userMoves() {
    let activityReset = new Date().getTime();
    localStorage.setItem("lastActivity", activityReset);
    console.log("Activity detected, timer reset");
}

window.addEventListener("mousemove", userMoves);
window.addEventListener("keypress", userMoves);

function checkActivity() {
    setInterval( () => {
        if (localStorage.getItem("lastActivity")) {
            let currentTime = new Date().getTime();
            let interval = currentTime - localStorage.getItem("lastActivity");

            if (interval >= 30000) {
                clearActivity(); // the code here moved to clearActivity function for clearity or for best practice 
            }
            
        }
    }, 1000);
}

function clearActivity(params) {
    // alert("No activity detected");
    console.warn("Secuirty: Session logged out due to inactivity");
    localStorage.removeItem("lastActivity");
}

checkActivity();

const watch = document.querySelector(".timer");
setInterval(()=> {
    const time = new Date();
    const hour = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    watch.innerHTML = `<h3>${hour}:${minutes}:${seconds}</h3>`;
}, 1000);