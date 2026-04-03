// let x

// console.log(x)
// let x
// console.log(x)
// x = 4

// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// let b ;
// b = 4

// a = 10
// console.log(a)
// var a 

// hello(); // TypeError: hello is not a function
// var hello = function() {
//     console.log("Hi!");
// };

for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // 3, 3, 3
    },1);
}

function outer() {
    console.log(a); // undefined
    var a = 5;
    function inner() {
        console.log(b); // undefined
        var b = 10;
    }
    inner();
}
outer();