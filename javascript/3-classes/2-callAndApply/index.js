function showThis() {
    console.log(this)
}

const obj = {
    name: 'John'
}

showThis()
showThis.apply(obj)
showThis.call(obj)

const boundFunction = showThis.bind(obj);
boundFunction(); // obj