const timerContent = document.querySelector(".timer");


function commitTimeLeft() {

    timerContent.innerHTML = "";

    //define the current time and deladline
    const now = new Date();
    const deadline = new Date();

    // if it is already 5:45 then set the deadline as 5:45 tomorrow
    if (now.getHours()>= 6 || (now.getHours() == 5 && now.getMinutes()>= 45)) {
        //set the deadline date as tomorrow
        deadline.setDate(now.getDate() + 1);
    }
    //set the deadline as 5:45

    deadline.setHours(5, 45, 0, 0);
    
    //difference of the time from now to tomorrow in ms
    let timeRemaining = deadline.getTime() - now.getTime();
    
    //change time remaining into hours
    
    const hours = Math.floor(timeRemaining / (1000 * 60 * 60)); // floor is used to remove all the value after the decimal
    const minutes = Math.floor(timeRemaining % (1000 * 60 * 60) / (1000 * 60));
    const seconds = Math.floor(timeRemaining % (1000 * 60 * 60) % (1000 * 60) / 1000);
    
    const message = document.createElement("div");
    const content = document.createElement("p");
    content.innerText = `Current Time in Nepal is ${now.toLocaleTimeString()},
        Your Git commit resets at 5:45 A.M, 
        You have ${hours} hours, ${minutes} Minutes, ${seconds} seconds left.`
    message.appendChild(content);
    timerContent.appendChild(message);

}


const clock = document.querySelector("h3");
function changeTime() {
    const time = new Date();
    const hours = time.getHours()
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(changeTime, 1000);
changeTime();


document.querySelector("#checkBtn").addEventListener("click", commitTimeLeft);


// --------gemini suggested code below--------

//  const timerContent = document.querySelector(".timer");
// const clock = document.querySelector("h3");

// function commitTimeLeft() {
//     const now = new Date();
//     const deadline = new Date();

//     // Nepal GitHub Reset Logic
//     if (now.getHours() >= 6 || (now.getHours() === 5 && now.getMinutes() >= 45)) {
//         deadline.setDate(now.getDate() + 1);
//     }
//     deadline.setHours(5, 45, 0, 0);

//     let timeRemaining = deadline.getTime() - now.getTime();

//     const hours = Math.floor(timeRemaining / 3600000);
//     const minutes = Math.floor((timeRemaining % 3600000) / 60000);
//     const seconds = Math.floor((timeRemaining % 60000) / 1000);

//     // Using a Template Literal for cleaner multi-line strings
//     timerContent.innerHTML = `
//         <div>
//             <p>Current Time (Nepal): ${now.toLocaleTimeString()}</p>
//             <p>GitHub Reset: 5:45 AM</p>
//             <p><strong>Remaining: ${hours}h ${minutes}m ${seconds}s</strong></p>
//         </div>
//     `;
// }

// function changeTime() {
//     const time = new Date();
//     // Using 24-hour format with padding
//     const h = time.getHours().toString().padStart(2, '0');
//     const m = time.getMinutes().toString().padStart(2, '0');
//     const s = time.getSeconds().toString().padStart(2, '0');
//     clock.innerText = `${h}:${m}:${s}`;
// }

// setInterval(changeTime, 1000);
// changeTime();
// document.querySelector("#checkBtn").addEventListener("click", commitTimeLeft);