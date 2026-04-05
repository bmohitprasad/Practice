const myObject = {
  values: [10, 20, 30],
  [Symbol.iterator]: function () {
    let index = 0;
    return {
      next: () => {
        console.log("this.values.length", this.values.length)
        console.log("this.values", this.values)
        // console.log("values", values)
        if (index < this.values.length) {
          return { value: this.values[index++], done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

for (const value of myObject) {
  console.log(value);
}

const array = ['a', 'b', 'c'];
const it = array[Symbol.iterator]()
for (let value of it) {
    console.log(value)
}