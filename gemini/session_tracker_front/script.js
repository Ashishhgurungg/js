const TIMEOUT_LIMIT = 30000; // 30 seconds
const progressBar = document.getElementById('idle-progress');
const clockElement = document.getElementById('clock');
const lockScreen = document.getElementById('lock-screen');

// 1. Record Activity
function pokeSession() {
    localStorage.setItem('lastActivity', Date.now());
}

window.addEventListener('mousemove', pokeSession);
window.addEventListener('keydown', pokeSession);

// 2. The Watchdog
function runWatchdog() {
    setInterval(() => {
        const lastActivity = parseInt(localStorage.getItem('lastActivity'));
        const now = Date.now();
        const diff = now - lastActivity;

        // Update Progress Bar UI
        const remainingPercent = Math.max(0, 100 - (diff / TIMEOUT_LIMIT * 100));
        progressBar.style.width = `${remainingPercent}%`;

        if (diff >= TIMEOUT_LIMIT) {
            triggerLogout();
        }
    }, 500);
}

// 3. The Backend Communication (Fetch)
async function triggerLogout() {
    const token = document.querySelector('meta[name="csrf-token"]').content;
    
    // We prepare the fetch call (this will fail until we build Laravel)
    try {
        await fetch('/api/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': token
            },
            body: JSON.stringify({ reason: 'timeout' })
        });
    } catch (e) {
        console.log("Backend not connected yet, performing local logout.");
    }

    localStorage.removeItem('lastActivity');
    lockScreen.classList.remove('hidden');
}

// 4. Live Clock
function updateUI() {
    setInterval(() => {
        const now = new Date();
        clockElement.innerText = now.toLocaleTimeString();
    }, 1000);
}

// Initialize
pokeSession();
runWatchdog();
updateUI();