const fruits = ["apple", "banana", "cherry"];

// The initialValue is an empty string: ""
const result = fruits.reduce((total, currentValue, currentIndex, arr) => {
  
  // We'll use all four arguments here to create a log message
  console.log(`--- Round ${currentIndex} ---`);
  console.log(`Total (Accumulator): "${total}"`);
  console.log(`Current Value: "${currentValue}"`);
  console.log(`Current Index: ${currentIndex}`);
  console.log(`Original Array: [${arr}]`);

  // We update the 'total' for the next round
  const nextTotal = total + (currentIndex > 0 ? " -> " : "") + currentValue.toUpperCase();
  
  return nextTotal;
}, ""); 

console.log("\nFINAL RESULT:");
console.log(result);