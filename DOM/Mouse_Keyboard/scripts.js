/* Eventos de ratón */

const button = document.getElementById('button')
const box = document.getElementById('box')
const input = document.getElementById('input')

// click - Cuando pulsamos el botón izquierdo del ratón
button.addEventListener('click', () => {
    console.log('CLICK')
})

// dbclick - cuando pulsamos dos veces seguidas el botón izquierdo del ratón
button.addEventListener('dblclick', () => {
    console.log('DOBLE CLICK')
})

// mouseenter - cuando entramos en la zona que tiene el elemento
box.addEventListener('mouseenter', () => {
    box.classList.replace('aqua', 'green')
})

// mouseleave - cuando salimos de la zona que tiene el evento
box.addEventListener('mouseleave', () => {
    box.classList.replace('green', 'aqua')
})

// mousedown - cuando pulsamos el boton izquierdo del raton
box.addEventListener('mousedown', () => {
    console.log('You are pressing the box')
})

// mouseup - cuando soltamos el boton izquerdo del ratón
box.addEventListener('mouseup', () => {
    console.log('You are not pressing the box')
})

// mousemove - Cuando movemos el ratón
box.addEventListener('mousemove', () => {
    console.log('You are moving the mouse in the box')
})

/* Eventos de teclado */

// keydown - cuando pulsamos una tecla
input.addEventListener('keydown', () => {
    console.log('You have pressed a key')
})

// keyup - cuando soltamos una tecla
input.addEventListener('keyup', () => {
    console.log('You stopped pressing the key')
})

// keypress - cuando pulsamos una tecla y no la soltamos
input.addEventListener('keypress', () => {
    console.log('You are pressing a key')
})