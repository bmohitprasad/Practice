// 1. Partail Application
const calculatePrice = (taxRate) => (price) => price + (price * taxRate)

const applyVAT = calculatePrice(0.20)
const applySalesTax = calculatePrice(0.08)

console.log(`Price for VAT ${applyVAT(100)}`)
console.log(`Price for Sales Tax ${applySalesTax(100)}`)