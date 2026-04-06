// Methods in js 
// Object.keys(): Returns an array of a given object's property names.


const obj1 = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj1)); // Output: ["a", "b", "c"]

// Object.values(): Returns an array of a given object's own enumerable property values.

console.log(Object.values(obj1)); // Output: [1, 2, 3]
 
// Object.entries(): Returns an array of a given object's own enumerable string-keyed property [key, value] pairs. 

console.log(Object.entries(obj1)); // Output: [["a", 1], ["b", 2], ["c", 3]]

// Object.assign(): Copies the values of all enumerable own properties from one or more source objects to a target object.

const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };
Object.assign(target, source);
console.log(target); // Output: { a: 1, b: 3, c: 4 }


// Object.create(): Creates a new object with the specified prototype object and properties.
const obj2 = Object.create({ foo: 1 });
console.log(obj.foo); // Output: 1

// Object.freeze(): Freezes an object, preventing new properties from being added to it, existing properties from being removed, and values from being changed.
  
const obj = { a: 1, b: 2 };
Object.freeze(obj);
obj.c = 3; // This will not add 'c' to the object
console.log(obj); // Output: { a: 1, b: 2 }



// Object.seal(): Seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable.


const obj = { a: 1, b: 2 };
Object.seal(obj);

delete obj.a; // This will not delete 'a' from the object
console.log(obj); // Output: { a: 1, b: 2 }
 

// 8.Object.hasOwnProperty(): Returns a boolean indicating whether the object has the specified property as its own property 


console.log(obj.hasOwnProperty("name"));





// How to iterate objects
// for...in Loop


var obj={
  name:"johnn",
  age:20,
  city:{
    name:"new york",
  }
}
for ( key in obj) {
  console.log( key + obj[key]);
}



// for...of Loop with Object.keys()


var obj={
  name:"johnn",
  age:20,
  city:{
    name:"new york",
  }
}
for ( key of Object.keys(obj)) {
  console.log(`${key}: ${obj[key]}`);
}



// for...of Loop with Object.values()


var obj={
  name:"johnn",
  age:20,
  city:{
    name:"new york",
  }
}
for ( value of Object.values(obj)) {
  console.log(value);
}


// for...of Loop with Object.entries()


var obj={
  name:"johnn",
  age:20,
  city:{
    name:"new york",
  }
}
for ( [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`);
}








