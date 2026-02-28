import { words } from './search.js'; // Separation of DOM vs Logic

console.log(words);

const input = document.querySelector('#search-input');
const list = document.querySelector('#results-list');

// 1. PERFORMANCE: Debounce Function
// Prevents the search logic from firing on every single keystroke.
function debounce(callback, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer); // Prevent memory leaks by clearing previous timers
        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}

// 2. LOGIC: The actual search handler
const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    // Clear the UI before showing new results
    list.innerHTML = ""; 

    if (!searchTerm) return;

    // Filter the imported data
    const matches = words.filter(word => 
        word.toLowerCase().includes(searchTerm)
    );

    // 3. EFFICIENCY: Use DocumentFragment
    // This avoids "Unnecessary reflows and repaints" by batching DOM updates.
    const fragment = document.createDocumentFragment();

    matches.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        fragment.appendChild(li); // Adding to fragment does NOT trigger a repaint yet.
    });

    // Final insertion: The browser only repaints once here!
    list.appendChild(fragment); 
};

// Hooking it up with a 500ms delay for smooth UX
input.addEventListener('input', debounce(handleSearch, 500));