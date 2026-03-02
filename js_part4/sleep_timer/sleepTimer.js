function calculateWakeUpTimes(sleepTime = new Date()) {
  const CYCLE_MINUTES = 90;
  const cycles = [4, 5, 6]; // 6h, 7.5h, and 9h of sleep

  console.log(`If you fall asleep at: ${sleepTime.toLocaleTimeString()}`);
  console.log("Optimal times to wake up:");

  cycles.forEach(cycle => {
    const wakeTime = new Date(sleepTime.getTime() + cycle * CYCLE_MINUTES * 60000);
    const hours = (cycle * CYCLE_MINUTES) / 60;
    
    console.log(`- ${wakeTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} (${hours} hours of sleep)`);
  });
}

calculateWakeUpTimes();