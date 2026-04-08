// 1. Partail Application
const calculatePrice = (taxRate) => (price) => price + (price * taxRate)

const applyVAT = calculatePrice(0.20)
const applySalesTax = calculatePrice(0.08)

console.log(`Price for VAT (20% tax): ${applyVAT(100)}`)
console.log(`Price for Sales Tax (8% tax): ${applySalesTax(100)}`)

// 2. Higher Order Functions

const users = [
    { id: 1, name: 'Alice', role: 'admin'},
    { id: 2, name: 'Bob', role: 'user'},
    { id: 3, name: 'Charlie', role: 'admin'}
]

const hasRole = (role) => (user) => user.role === role;

const admins = users.filter(hasRole('admin'))
const regularUsers = users.filter(hasRole('user'))

console.log(`Admins: ${admins}`)

// 3. Functional Programming

const multiply = (a) => (b) => a * b
const add = (a) => (b) => a + b

const double = multiply(2)
const addTen = add(10)

const numbers = [1, 2, 3]

const result = numbers.map(double).map(addTen)

console.log(result)