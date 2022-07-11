/* Ordenar 3 numeros de mayor a menor */

const numbers = document.getElementById('numbers')
const result = document.getElementById('result')

let a = Number.parseInt(prompt('Firt number: '))
let b = Number.parseInt(prompt('Second number: '))
let c = Number.parseInt(prompt('Third number: '))

numbers.textContent = `The numbers entered are ${a}, ${b}, ${c}`

/* Solving */

if (a >= b && a >= c) {
    if (b > c) {
        result.textContent = `El orden es: ${a}, ${b}, ${c}`
    }
    else {
        result.textContent = `El orden es: ${a}, ${c}, ${b}`
    }
}
else if (b >= a && b >= c) {
    if (a > c) {
        result.textContent = `El orden es: ${b}, ${a}, ${c}`
    }
    else {
        result.textContent = `El orden es: ${b}, ${c}, ${a}`
    }
}
else {
    if (a > b) {
        result.textContent = `El orden es: ${c}, ${a}, ${b}`
    }
    else {
        result.textContent = `El orden es: ${c}, ${b}, ${a}`
    }
}