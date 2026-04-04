scores = [10, 20, 30]

const double = scores.map((curr, i) => {
    return `Double of ${curr} at index ${i} is ${curr * 2}`
})

console.log(double)



const relativeTotal = scores.map((curr, i, arr) => {
    
    const total = arr.reduce((acc, element) => acc + element, 0)

    return `Score ${curr} is ${((curr / total) * 100).toFixed(0)} of the total.`
})

console.log(relativeTotal)