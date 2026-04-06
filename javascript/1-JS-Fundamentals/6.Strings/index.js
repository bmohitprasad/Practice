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

let str2= "Hellow, world!";
let newString = str2.indexOf("rl")//output 5 because it checks from the starting
let newString1= str2.lastIndexOf("w")//output 8 because it checks from the ending
let newString2= str2.lastIndexOf("w",5)//output 8 because it checks from the ending

console.log(newString)

let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/gi);    //4 [ain,AIN,ain,ain]
