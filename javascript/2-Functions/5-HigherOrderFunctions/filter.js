// const nums = [1, 2, 2, 3, 4, 4, 5];

// // "If the index of the FIRST time we see this value 
// // is the same as our current index, it's unique."
// const uniqueNums = nums.filter((element, index, array) => {
  
//   console.log(array.indexOf(element)) // returns the index of first found one
//   console.log("element: ", element)

//   console.log("index: ", index)
//   console.log("____________________________")
  
//   return array.indexOf(element) === index;
// });

// console.log(uniqueNums); // [1, 2, 3, 4, 5]

const checkList  = {
    minAge: 21
}

const users = [20, 22, 21]

const eligible = users.filter(function (element) {
    return element >= this.minAge
}, checkList)

console.log(eligible)
