// let numbers = [1, 2, 3, 4, 5];
// numbers.splice(2, 2, 'a', 'b'); // Replaces 2 elements starting from index 2 with 'a' and 'b'
// console.log(numbers); // Output: [1, 2, 'a', 'b', 5]

// let numbers1 = [1, 2, 3, 4, 5];
// let slicedArray = numbers.slice(1, 4); // Extracts elements from index 1 to index 3 (exclusive)
// console.log(slicedArray); // Output: [2, 3, 4]

// let slicedArray2 = numbers.slice(-3); // Extracts the last 3 elements of the array
// console.log(slicedArray2); // Output: [3, 4, 5]

// let slicedArray3 = numbers.slice(1, -1); // Extracts elements from index 1 to second last element
// console.log(slicedArray3); // Output: [2, 3, 4]



// let fruits = [1, 2, 3];
// console.log(fruits.join(' - ')); // Output: "apple - banana - orange"

let arr=["a", "b", "c" ,"d","e",["f", ["g", ["h","i"]]]];
newarr= arr.flat(2)
console.log(newarr)