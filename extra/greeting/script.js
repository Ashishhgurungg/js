function updateDashboard() {
    const now = new Date();
    
    // 1. Get hours, minutes, seconds
    const hours = now.getHours();
    const mins = now.getMinutes().toString().padStart(2, '0');
    const secs = now.getSeconds().toString().padStart(2, '0');

    // 2. Display the time
    document.getElementById('clock').innerText = `${hours}:${mins}:${secs}`;

    // 3. Logic for Greeting
    let message = "Hello!";
    if (hours < 12) message = "Good Morning, Achiever!";
    else if (hours < 18) message = "Good Afternoon, Keep Going!";
    else message = "Good Evening, Time to Recharge!";
    
    document.getElementById('greeting').innerText = message;
}

// Update clock every second
setInterval(updateDashboard, 1000);
updateDashboard(); // Run immediately so it doesn't wait 1 second to start

// --- YOUR TASK ---
// 1. Select the 'setGoalBtn' and 'goalInput' 
// using document.getElementById


const input = document.querySelector("#goalInput");
const button = document.querySelector("#setGoalBtn");
const paragraph = document.getElementById("displayGoal")

// 2. Add a 'click' event listener to the button

// 3. When clicked, take the value from the input and put it into the 'displayGoal' paragraph
button.addEventListener("click", (e) => {
    const finalValue = input.value.trim();
    if (finalValue !== "") {   
        paragraph.textContent = finalValue;

    }
    else {
        paragraph.textContent = "Please enter something";
    }
    input.value = "";
})