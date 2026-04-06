let str = "Hello, world!";
console.log(str.slice(0, 5));    // Output: "Hello"
console.log(str.slice(7));     // Output: "world!"
console.log(str.slice(-6));    // Output: "world!"
console.log(str.slice(7, -1)); // Output: "world"
console.log(str.slice(0)); // Output: "Hello, world!"
console.log(str.slice(-1)); // Output: "!"

// let str = "Hello, world!";
console.log(str.substring(0, 5)); // Output: "Hello"
console.log(str.substring(7)); // Output: "world!"
console.log(str.substring(7, 12)); // Output: "world"
console.log(str.substring(-6)); // Output: "Hello, world!"
console.log(str.substring(7, -1)); // Output: "Hello, world"

// let str = "Hello, world!";
console.log(str.substr(0, 5)); // Output: "Hello"
console.log(str.substr(7)); // Output: "world!"
console.log(str.substr(7, 5)); // Output: "world"
console.log(str.substr(-6)); // Output: "world!"
console.log(str.substr(7, -1)); // Output: ""
