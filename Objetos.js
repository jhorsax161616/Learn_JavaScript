/* Objects -> Similar a los diccionarios en Python */
const person = {
    name: 'Andrea',
    age: 26,
    sons: ['Sunn', 'Sefa']
}

//Accediendo a los valores
console.log(person);
console.log(person.name);
console.log(person['name']);

//Accediendo a las llaves
for (const key in person) 
{
    console.log(key)
}

//Accediendo a los valores por medio de la llave
for (const key in person) 
{
    console.log(person[key])
}

//Con el punto y la llave accedemos a cualquier valor
for (const son of person.sons)
{
    console.log(son)
}