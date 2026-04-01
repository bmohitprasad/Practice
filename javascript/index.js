function debounce(func, delay) {
  let timeoutId;
  
  return function(...args) {
    // If the function is called again, "reset" the timer
    clearTimeout(timeoutId);
    
    timeoutId = setTimeout(() => {
      func.apply(this, args); // Run the function after the silence
    }, delay);
  };
}

// 1. The function we want to limit (the "heavy" task)
function fetchResults(query) {
  console.log(`Searching API for: ${query}`);
}

// 2. Wrap it in your debounce function
const debouncedSearch = debounce(fetchResults, 500);

// 3. Simulate a user typing "Hi" quickly
debouncedSearch("H");  // Timer starts
debouncedSearch("Hi"); // "H" timer is CANCELLED; new 500ms timer starts for "Hi"

// After 500ms of no more typing:
// Output: "Searching API for: Hi"