function greet(){
    console.log('Hello')
}

greet() //Invoca la funcion

//La forma correcta de crear una funcion es:
const greet2 = () => {
    console.log("Hello Jhordan Sax")
}

greet2()

//Funcion con parametros
const greet_user = (user) => {
    console.log(`Hello ${user}`)
}

greet_user('Andrea')
greet_user('Sax')

//varios parametros y retornando un valor
const sum = (x, y) => {
    return x + y
}

console.log(sum(8.5, 3));