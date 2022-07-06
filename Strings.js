let cadena = "Hello World";

//PROPIEDADES Y METODOS (Los metodos no alteran la cadena)

///Devuelve la longitud de una cadena
console.log("Longitud: ", cadena.length)

///Devuelve la cadena a mayúsculas
console.log(cadena.toUpperCase())

///Llevar a minúsculas
console.log(cadena.toLowerCase())

///Devuelve la posición del string entero en una cadena, else -1
console.log(cadena.indexOf('Wo'))

///Remplazar una parte del string
console.log(cadena.replace('World', 'Youtube'))

///Extrae los caracteres desde inicio hasta el final
console.log(cadena.substring(3))
console.log(cadena.substring(3, 7)) //se puede delimitar

///Podemos trabajar con indices negativos respecto al anterior
console.log(cadena.slice(-3))
console.log(cadena.slice(0, -4))

///Eliminar espacios al inicio y al final
let cadena2 = '  Hello world, I\'m learning JavaScript   '
console.log(cadena2.trim())

///Comprueba si la cadena empieza con ese valor
console.log(cadena2.startsWith(' '))
console.log(cadena2.startsWith('  '))
console.log(cadena2.startsWith('   '))
console.log(cadena2.startsWith('H', 2)) //Indicamos desde donde inicia a contar

///Comprueba si la cadena termina con ese valor
console.log(cadena2.endsWith(' '))
console.log(cadena2.endsWith(' ', 13)) //Delimita la cadena
console.log(cadena2.endsWith('learning', 27))

///Retorna true or false si el string se encuentra en la cadena
console.log(cadena2.includes('n'))
console.log(cadena2.includes('w', 9))
console.log(cadena2.includes('w', 8))

///Repetir el string n veces
let cadena3 = 'Ny'
console.log(cadena3.repeat(3))
console.log('J '.repeat(3))

//Template Strings
console.log(`Hola ${cadena} \n${cadena2.trim()} ${cadena3} JAJAJa`)