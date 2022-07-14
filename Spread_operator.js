/* Spread Operator

Su sintaxis es ... 
*/

const numbers = [-5, 6, 18, 0, 6];

console.log(numbers);
console.log(...numbers);

/* ¿Qué se puede hacer con esto? */

//Enviar elementos en un array a una función
const addNumbers = (a, b, c) => {
    console.log(a + b + c)
}

let numbersToAdd = [1, 2, 3]

addNumbers(numbersToAdd)
addNumbers(...numbersToAdd)

//Añadir un array a otro array
let users = ['Andrea', 'David', 'Milla', 'Sax']

let newUsers = ['Juan', 'Pepe', 'Tito']

users.push(...newUsers) //Las posibilidades son muchas, no solo con push

console.log(users)

//Copiar arrays
let arr1 = [1, 2, 3, 4]
let arr2 = [...arr1]

console.log(arr2)

//Concatenar arrays
let names = ['Jhordan', 'Sax'];
let last_name = ['Cordova', 'Poma'];

console.log([...names, ...last_name])

//Enviar un numero indefinido de argumentos a una funcion
//(parámetros REST)

const restParms = (...numbers) => {
    console.log(numbers);
}

restParms()
restParms(1, 2, 3, 4)
restParms(0, 2)
restParms(1, 6, 8, 9, 7 ,1, 5, 1, 15)

//Librería math
const numbers2 = [15, 5, 8 ,0, 55, 16]
console.log(Math.max(...numbers2)) //Recibe una cantidad indefinida de elementos
console.log(Math.min(...numbers2))

//Eliminar elementos duplicados
any = [1, 1, 1, 2, 3, 3, 4, 4, 5, 5]

console.log(...new Set(any))
console.log([...new Set(any)])