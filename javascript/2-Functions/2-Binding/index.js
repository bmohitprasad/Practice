const person = {
    name: 'Mohit',
    greet: function () {
        console.log("Hello, "+this.name)
    }
}
person.greet()
console.log(person.greet())
console.log(person.name)
console.log("_________________________________________")
console.log(console.log())
console.log("_________________________________________")


const person2 = {
    name: 'GFG2',
    greet: function() {
        console.log('Hello, ' + this.name);
    }
};
const greeter = person2.greet;
console.log(greeter)
greeter();
console.log("_________________________________________")

const person3 = {
    name: 'GFG3',
    greet: function() {
        console.log('Hello, '+ this.name);
    }
}
const greeter3 = person3.greet;
const boundedGreet = greeter3.bind(person3)
boundedGreet()

console.log("_________________________________________")

const person4 = {
    name: "GfG4",
    greet: function (city) {
        console.log(`Hello, ${this.name} from ${city}`)
    }
}

const greeter4 = person4.greet;
greeter4.call(person4, 'Hyderabad')

console.log("_________________________________________")

const person5 = {
    name: 'Mohit',
    greet: function (city, country) {
        console.log(`Hello, ${this.name} from ${city}, ${country}`)
    }
}

const greeter5 = person5.greet;
greeter5.apply(person, ['Hyderabad', 'India'])

console.log("_________________________________________")

const person6 = {
    name: 'GfG6',
    greet: function () { 
        const greetArrow = () => {
            console.log(`Hello, ${this.name}`)
        }
        greetArrow()
    }
}

person6.greet()
console.log("_________________________________________")