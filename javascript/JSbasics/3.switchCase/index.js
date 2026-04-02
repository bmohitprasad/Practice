const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('What is the day? ', day => {
    switch (day){
        case "Monday":
            console.log("Start of the week")
            break
        case "Friday":
            console.log("End of the week")
            break
        default:
            console.log("It's a regular day")
    }
  readline.close();
});

// let x = prompt("Enter num: ")