function namedFunc(a, b) {
    return a + b
}
console.log(namedFunc(10, 20))
console.log("_______________________________________________________________")

const anonymousFunc = function () {
    return "hi there";
}
console.log("_______________________________________________________________")

const funcExpression = function (a, b) {
    return a - b;
}

console.log(funcExpression(10, 20))
console.log("_______________________________________________________________")

const arrowFunc = (a, b) => {
    return a / b;
}
console.log("_______________________________________________________________")

function ConstructorFunc (a, b) {
    this.value1 = a;
    this.value2 = b;
}
const values = new ConstructorFunc(10, 20)

console.log(values.value1)
console.log(values.value2)


console.log("_______________________________________________________________");

console.log("Have ; 'semicolon' before and after declaring an IIFE function");
(function () {
    console.log("This runs immediately!");
})();
console.log("_______________________________________________________________");

function multi (a, b) {
    return a * b
}

function callback (func, a, b) {
    const res = func(a, b)
    console.log(res)
}

callback(multi, 10, 20)
callback(namedFunc, 10, 20)

console.log("_______________________________________________________________");

async function asyncFunc() {
    return "DataFetched"
}

asyncFunc().then(console.log)

console.log("_______________________________________________________________");

function* generatorFunc (r) {
    for (let i = 0; i < r; i ++) {
        yield r;
    }
}

obj2 = generatorFunc(10)
console.log(obj2.next().value)
console.log("_______________________________________________________________")

function fact (n) {
    if (n == 0) return 1
    return n * fact (n - 1)
}

console.log(fact(5))
console.log("_______________________________________________________________")

function multiplyBy (factor) {
    return function (num) {
        return num * factor
    }
}

const double = multiplyBy(2)
console.log(double(30))
console.log("_______________________________________________________________")

function pureFunc (a, b) {
    return a + b
}

function nestedFunc (a, b) {
    const x = 10
    function inner () {
        console.log(a + b + x)
    }
    return inner()
}

nestedFunc(10, 20)

function sums(...nums) {
    return nums.reduce((a, b) => a + b, 0)
}

console.log(sums(10, 20, 30, 40))