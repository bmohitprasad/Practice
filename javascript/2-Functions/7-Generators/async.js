function* asyGenerator () {
    console.log("Task 1")
    yield new Promise (resolve => {
        setTimeout (() => {
            resolve("Task 2")
        }, 2000)
    })

    console.log("Task 3")
}

const gen = asyGenerator()
gen.next().value.then(console.log)
gen.next()

// function* asyncTask() {
//     console.log('Task 1');
//     yield new Promise(resolve =>
//         setTimeout(() =>
//             resolve('Task 2'), 1000));
//     console.log('Task 3');
// }
// const task = asyncTask();
// task.next().value.then(console.log);
// task.next();