function outer() {
    let outerVariable = "Content from outer scope"
    function inner() {
        console.log(outerVariable)
        outerVariable = "updated!"
    }
    return inner
}
const closure = outer()
// console.log(closure)
closure()
closure()
