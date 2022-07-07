/* Condicional Simple */
let num = -5

if (num > 0) {
    console.log(`${num} is greater than 0`)
}

/* Conficional compuesto */
if (num > 0) {
    console.log(`${num} is greater than 0`)
}
else if (num < 0) {
    console.log(`${num} is less than 0`)
}
else {
    console.log(`${num} is equal than 0`)
}

/* Multicondicional */
num = 1
let num2 = 10

if (num > 0 && num2 > 0) {
    console.log(`${num} and ${num2} are greater than 0`)
}
if (num > 0 || num2 > 0) {
    console.log(`${num} or ${num2} are greater than 0`)
}
if (!(num < 0)) {
    console.log(`${num} no es menor que 0`)
}

if ('Hello'.length > 4) {
    console.log('Hello has got more than 4 letters')
}

//curiosities
console.log(!4)
console.log(!!4)
console.log(!!-5)
console.log(0)

console.log(!0)
console.log(!1)