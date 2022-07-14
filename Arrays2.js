/* Arrays - Metodos II */
let word = 'Hello world, I am Sax';

console.log(word);

// .from(iterable) - Convierte en array el elemento iterable
console.log(Array.from(word));
console.log(word.split(''))


// .sort([callback]) - Ordena los elementos de un array alfabéticamente segun valor unicode
// Pero si le pasamos un callback lo ordena en función del algoritmo pasado
const letters = ['N', 'A', 'J', 'S'];
const numbers = [2, 8, 1, 2, 100, 300, 3]

console.log(letters.sort());
console.log(numbers.sort()); //Esto no funciona porque toma valores unicode =>

console.log(numbers.sort((a, b) => a - b)); //Curiosidades de JS
console.log(numbers.sort((a, b) => b - a)); //Curiosidades de JS


/* .forEach(callback(currentValue, [index])) - Ejecuta la función indicada una vez
por cada elemento del array */
const numbers2 = [12, 15, 66, 18, 99]

numbers2.forEach((i, index) =>
    {
        console.log(`${i} is in position ${index}`)
        console.log('-------------------------------')
    }
)

/* .some(callback) - Comprueba si al menos un elemento del array
cumple la condición */
const words = ['HTML', 'CSS', 'JavaScript', 'R']

console.log(words.some(i => i.length > 2))
console.log(words.some(i => i.length < 2))
console.log(words.some(i => i.length < 1))

/* .every(callback) - Comprueba si todos los elementos del array
cumplen la condición */
console.log(words.every(i => i.length >= 1))
console.log(words.every(i => i.length < 2))
console.log(words.every(i => i.length < 20))

/* METODOS IMPORTANTES */

// .map(callback) - Transforma todos los elementos del array y devuelve un nuevo array
const numbers3 = [2, 3, 4, 5, 6, 11, 15]

console.log(numbers3.map((i) => i % 2))

// .filter(callback) - Filtra todos los elementos del array que cumplan la condición
console.log(numbers3.filter((element) => element % 2 === 0))

// .reduce(callback) - Reduce todos los elementos del array a un único valor
console.log(numbers3.reduce((a , b) => a + b, 1))

/* Algo curioso de esto es que podemos inicializar a con una coma despues de las sentencia operadora INVESTIGAR */