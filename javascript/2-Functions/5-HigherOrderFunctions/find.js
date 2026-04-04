const n = [1, 2, 3, 4, 5];
const fEven = n.find((num) => num % 2 === 0);
console.log(fEven);

const n2 = [1, 2, 3, 4, 5];
const hasNeg = n.some((num) => num < 0);
console.log(hasNeg);

const n3 = [1, 2, 3, 4, 5];
const allPos = n.every((num) => num > 0);
console.log(allPos)