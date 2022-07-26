/* 
Objeto window - Es el objeto global, de él 
    descienden todos los objetos

        alert()
        prompt()
        confirm()

    Estos no son muy utilizados...
*/

/* alert('Esto es un alert!')
prompt('Esto es un prompt')

if (confirm('Ud. Acepta? (Esto es un confirm)')) {
    alert('Usted Acepto!')
}
else {
    alert('Usted NO Acepto!')
} */

/* 
Objeto console - Es el objeto que contiene la consola del navegador
    console.log() 
    console.dir() -- Muy similar a console.log pero nos ayuda a veces
                    cuando no podemos despleagar los detalles de un evento en la consola
    console.error() -- Imprime en la consola un error
    console.table() -- Nos imprime por consola de una forma más visual (en forma de tabla)
                        los objetos como los arrays 
*/


const person = {
    name: 'Jhorsax',
    age: 30,
    email: 'python@gmail.com'
}

console.log(person)
console.table(person)

/* 
Objeto location - Es el objeto que contiene la barra de direcciones

    location.href -- Ver la ruta (link) de seccion actual de la página
    location.protocol -- Ver el protocolo de la pagina
    location.host -- Imprime el dominio principal que estamos utilizando
    location.pathname -- Devuelve la ruta de los subdirectorios en el que estamos
    location.hash -- Una forma de pasar parámetros entre páginas
    location.reload() -- Recarga la página
*/

console.log(location.href)
console.log(location.protocol)
console.log(location.host)
console.log(location.pathname)
console.log(location.hash)

//Podemos redirigir la página a otra
/* location.href = 'https://google.com' */

/* Objeto history. -- Trabajamos con el historial de la pestaña

    back() -- Nos lleva hacia atras en el historial
    forward() -- Nos lleva hacia adelante en el historial
    go(n|-n) -- Podemos navegar a travez del historial, + para adelante y - para atras

    length
*/

/* Objeto date
    primero necesitamos invocar al constructor Date()
*/

const date = new Date()

console.log(date.getDay()) //Cuenta los días desde 0
console.log(date.getMonth()) //Cuenta los meses desde 0
console.log(date.getDate()) // Da el número del día de hoy
console.log(date)

/* Timers
    Timeout:
        setTimeout(() => {code}, delay_in_ms) -- Hace que se ejecute la
            función despues de delay. Si lo referenciamos mediante una variable/constante
            podemos pararlo con clearTimeout(referencia)
    
    Interval:
        setInterval(() => {code}, delay_in_ms) -- Hace que se ejecute la función cada delay ms.
            Si lo referenciamos mediante una variable/constante podemos pararlo con clearInteravl(referencia)
*/

button = document.getElementById('button')
buttond = document.getElementById('buttond')

/* button.addEventListener('click', () => {
    setTimeout(saludar, 3000) // Ejecutara la función saludar despúes de 3 segundos que se inicia el evento
})
 */
const saludar = () => {
    console.log('Hello')
}

/* para poder detener con clear tenemos que guardarlo en una variable */

button.addEventListener('click', () => {
    saludo = setTimeout(saludar, 3000) // Ejecutara la función saludar despúes de 3 segundos que se inicia el evento
})

buttond.addEventListener('click', () => {
    clearTimeout(saludo)
    console.log('Saludo cancelado :(')
})

// INTERVAL
stop = document.getElementById('stop')

let cont = 0

const contador = () => {
    console.log(cont)
    cont++
}
const interval = setInterval(contador, 2000)

stop.addEventListener('click', () => {
    clearInterval(interval)
})

