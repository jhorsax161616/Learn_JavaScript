
/* document.getElementById('id') - Acceder a un elemento a través
de su id*/
const title = document.getElementById('title')

console.log(title)

title.textContent = 'DOM - Change with JS'

/* element-document.querySelector('selectorCSS') - Accede al primer elemento
que coindcida con el selector CSS  */
const paragraph = document.querySelector('.paragraph')

const span = paragraph.querySelector('span') //selector por elemento - querySelector

console.log(paragraph);
console.log(paragraph.textContent);
console.log(span);
console.log(span.textContent);

/* element-document.querySelectorAll('selectorCSS') - Accede a todos los elementos que
coincidan con el selector CSS, devuelve un nodeList*/
const paragraphs = document.querySelectorAll('.paragraph')

paragraphs[0].style.color = 'red' //solo para este caso didactico (esto no es recomendable)

//paragraphs.map(p => p.style.color = 'green') //Esto nos da error porque no es un array

//Llevamos a array 1
const paragraphsSpread = [...document.querySelectorAll('.paragraph')] //Aun no es soportado por todos los navegadores

paragraphsSpread.map(p => p.style.color = 'green')

//Llevamos a array 2
const paragraphsArray = Array.from(document.querySelectorAll('.paragraph'))

paragraphsArray.map(p => p.style.color = 'blue')

console.log(paragraphs)