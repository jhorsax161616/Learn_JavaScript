/* Objeto Evento */

const form = document.getElementById('form')
const input = document.getElementById('input')
const button = document.getElementById('button')
const gallery = document.getElementById('gallery')

input.addEventListener('keyup', (event) => {
    console.log(event);
    console.log(event.key);
})

/* addEventListener('click', (e) => {
    console.log(e);
}) */

button.addEventListener('click', (e) => {
    console.dir(e.target);
    input.value = "Hiciste click en el botom?"
})

gallery.addEventListener('click', (e) => {
    console.log(e.target.textContent);
    e.target.classList.add('pink');
})

/* Podemos quitar un comportamiento predeterminado de un elemento
como el del boton submit que hace reiniciar la página */
form.addEventListener('submit', (e) => {
    e.preventDefault() // Hace que el elemento no se ejecute por defecto
    console.log('Done!')
})

const link =document.getElementById('google')

link.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('Block link!!')
    //Inlusive nosotros mismo podemos interactuar con la pagina
    button.click()
})