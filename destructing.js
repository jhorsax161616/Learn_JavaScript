/* 
    La destructuración es una expresión de JS que hace posble la extracción de
        datos de arreglos u objetos.
*/


const person = {
    name: 'Sax',
    age: 20,
    email: 'jhorsax@email.com'
}

// Tradicionalmente accedemos a los datos de un objeto así
const namet = person.name
const aget = person.age
const emailt = person.email

console.log(namet, aget, emailt)

// Pero ahora se puede realizar lo siguiente (destructuring)

const{name, age, emailf} = person

console.log(name, age, emailf)

// Inclusive podemos darle otro nombre de variable

const{name: nombre, age: edad, email: correo} = person

console.log(nombre, edad, correo)


// PARA ARRAYS

const numbers = [1, 2, 3, 4]

// Normalmente accedemos a los datos así:
console.log(numbers[0], numbers[1], numbers[2], numbers[3])

// Pero descructurando podemos hacerlo así:
const [uno, dos, tres, cuatro] = numbers

console.log(uno, dos, tres, cuatro)


// CASO DE USO

const printPerson = ({name, age: edad, email: correo}) => {
    console.log(nombre, edad, correo)
}

printPerson(person)