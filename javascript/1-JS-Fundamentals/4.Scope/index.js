let x = 10
function fun () {
    let y = 20
    console.log('Global variable: ', x)
    console.log('Local variable: ', y)
}

fun()

console.log("Block scope")
var a = 10
{
    let b = 20
    const c = 30
    console.log(a) 
    console.log(b) 
    console.log(c) 
}

console.log(a)

function fun2() {
    let x = 10

    function inner() {
        let y = 20
        console.log(`From lexical scope: ${x}, ${y}`)
    }
    inner()
}
fun2()


