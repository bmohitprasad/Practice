let obj={
    name:"John",
    age:30,
    sayHello:()=>{
        console.log(this.age) //undefined 
    }
}


obj.sayHello()

const person = {
    name: 'John',
    greet: () => {
        console.log('Hello, my name is ' + this.name);
    }
};


person.greet(); // Logs "Hello, my name is John"