let count = 0
interval = setInterval(() => {
    count ++
    console.log(count)
    if (count == 5) {
        clearInterval(interval)
    }
}, 1000) 