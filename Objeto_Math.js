/* Es un objeto que se utiliza para operaciones matemáticas
más específicas. Este es un objeto estático (Tenemos que invocarlo)*/

//Constante de euler
console.log(Math.E)

//Pi
console.log(Math.PI)

//Devuelve el valor absoluto de x
console.log(Math.abs(-5))

//Devuelve el entero más grande mayor o igual que un número
console.log(Math.ceil(5.9))
console.log(Math.ceil(5.3))
console.log(Math.ceil(5.5))
console.log(Math.ceil(5))


//Devuelve el entero más peuqeño menor o igual que un número
console.log(Math.floor(5.9))
console.log(Math.floor(5.5))
console.log(Math.floor(5.2))
console.log(Math.floor(6))

//Devuelve la potencia de x elevado a y(segundo parámetro)
///Podemos usar simplemente la clásica 2 ** 8
console.log(Math.pow(2, 8))
console.log(Math.pow(2, -1))
console.log(Math.pow(4, 1/2))
console.log(Math.pow(-4, 1/2))

//Genera un número pseudoaleatorio entre 0 y 1
console.log(Math.random())

//Devuelve el valor de un número redondeado al entero más cercano
console.log(Math.round(Math.random()*100)) //entre 0 y 100
console.log(Math.round(Math.random()*(5 - 3) + 3)) //entre 3 y 5(no incluye)

//Devuelve el signo de la x, que indica si x es positivo, negativo o cero
console.log(Math.sign(-5))
console.log(Math.sign(0))
console.log(Math.sign(5))

//Raiz cuadrada
console.log(Math.sqrt(64))
console.log(Math.sqrt(2))