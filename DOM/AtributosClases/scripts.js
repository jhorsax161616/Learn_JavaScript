const title = document.getElementById('title')
const namee = document.getElementById('name')

console.log(title)
console.log(namee)

/* Atributos */

/* element.getAttribute('attribute') - Obtiene un atributo del elemento
   element.setAttribute('attribute', value) - Modifica un atributo del elemento*/

console.log(namee.getAttribute('id'))
console.log(namee.getAttribute('type'))

/* namee.setAttribute('type', 'date') */
namee.setAttribute('id', 'names')

console.log(namee.getAttribute('id'))
console.log(namee.getAttribute('type'))

/* Classes */

// element.classList.add('class', 'class2', ....) - Añade clase(s) a un elemento
console.log(title.getAttribute('class'))
title.classList.add('main-title', 'other-title')
console.log(title.getAttribute('class'))

// element.classList.remove('class', 'class2', ....) - Borra la(s) clase(s) a un elemento, si no existe no pasa nada
title.classList.remove('other-title')
console.log(title.getAttribute('class'))

// element.classList.contains('class') - Comprueba si la clase existe y retorna un booleano
console.log(title.classList.contains('main-title'))
console.log(title.classList.contains('other-title'))

// element.classList.replace('oldClass', 'newClass')
title.classList.replace('main-title', 'titulo-principal')
console.log(title.getAttribute('class'))

/* Clases de "primer nivel" o "directas" */
console.log(title.id)
console.log(title.innerHTML)
console.log(title.textContent)

console.log(namee.value)
console.log(namee.value.length)