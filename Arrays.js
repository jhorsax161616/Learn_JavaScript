let numbers = [1, 2, 3, 4, 5];

console.log(numbers);

//Accediendo a un valor por su índice
console.log(numbers[0]);
console.log(numbers[2]);
console.log(numbers[4]);

let words = ['Hello', 'Nrl', 'And', 'World']

console.log(words)
console.log(words[0] + ' ' + words[3])

/* Propiedades */
let numbers2 = [0, 1, 2, 3, 4];
console.log(numbers2.length);

/* Métodos */

//Array.isArray(variable a evaluar) - Devuelve true si la variable es un array
let x = 6;
let array = [[1, 2], [3, 5], [4,1]]

console.log(Array.isArray(x))
console.log(Array.isArray(array))

//Eliminar un elemento

/// .shift() Elimina el primer elemento de larray y lo retorna
/// .pop() Elimina el último elemento y lo retorna
console.log(array)
console.log(array.shift())
console.log(array)
console.log(array.pop())
console.log(array)

//Añadir elementos

/// .push(element, element2, ...) Añade uno o más elementos al final y devuelve la nueva longitud
/// .unshift(element1, element2, ...) Añade uno o más elmentos al inicio y ||
let array2 = [[2,5], [3, 6], [8, 2]]
console.log(array2)
console.log(array2.push([5, 5]))
console.log(array2)
console.log(array2.unshift([1, 1], [1, 3]))
console.log(array2)

//Buscar elementos
let strings = ['Hello', 'New', 'York', 'Hello','City']

/// .indexOf() Devuelve el primier índice que coincida, else -1
console.log(strings)
console.log(strings.indexOf('Hello'))

/// -lastIndexOf() Devuelve el último índice que coincida, else -1
console.log(strings)
console.log(strings.lastIndexOf('Hello'))

//Alterando el array
let numbers3 = [1, 2, 3 ,4 ,5]

/// .reverse() Invierte el orden de lso elementos del array 
console.log(numbers3)
console.log(numbers3.reverse())
console.log(numbers3)

/// .join('separador') Devuelve un string con el separador que pasemos
let strings2 = ['My', 'live', 'is', 'very', 'hard.']
console.log(strings2)
console.log(strings2.join())
console.log(strings2.join(' '))
console.log(strings2.join('-'))
console.log(strings2.join('☻'))
console.log(strings2)

/* .splice(a, b, items) Cambia el contenido de un array eliminando  
elementos existentes y/o agregando nuevos elementos
    
    a -> Indice de inicio
    b -> Número de elementos (opcional)
    items -> Elementos a añadio en ele caos de que se añadan. (opcional)
*/

let numbers4  = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers4)
console.log(numbers4.splice(3)) //Retorna la parte eliminada
console.log(numbers4)

let numbers5 = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers5)
console.log(numbers5.splice(3, 3)) //Retorna la parte eliminada
console.log(numbers5)

//Si b vale 0 no elimina ningun elemento solo añade
let numbers6 = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers6)
console.log(numbers6.splice(3, 2, 0, 0, 0)) //Retorna la parte eliminada
console.log(numbers6)

numbers6 = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers6)
console.log(numbers6.splice(3, 0, 0, 0, 0)) //Retorna la parte eliminada
console.log(numbers6)

/* .slcie(a, b) -> Extrae elementos de un array desde el índice
a hasta el índice b. Si b no existe lo hace desde a hastta el, 
final, si no eiste nu a ni b hace una copia del original*/

let numbers7 = [1, 2, 3, 4, 5 ,6, 7, 8];
console.log(numbers7);
console.log(numbers7.slice()) //retorna la parte extraida
console.log(numbers7.slice(3)) //retorna la parte extraida
console.log(numbers7.slice(3, 5)) //retorna la parte extraida