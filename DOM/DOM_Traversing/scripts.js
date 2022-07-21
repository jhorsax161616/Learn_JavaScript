/* Recorrer el DOM (DOM Traversing) */

/* Padre - parent (Nodo del que desciende)
    - parentNode - Devuelve el nodo padre (que puede no ser un elemento)
    - parentElement - Devuelve el nodo elemento padre
    
    NOTA
        Los nodos del tipo Document y DocumentFragment nunca van
        a tener un elemento padre, parentNode devolverá siempre null
*/

const parent = document.getElementById('parent')
const title = document.getElementById('title')

console.log(parent.parentNode);
console.log(title.parentElement); //Es lo mismo, pero investigar más

/* Hijos - child (Nodo q' deciende de un padre)
    - childNodes - Devuelve todos los nodos hijos
    - children - Devuelve todos los nodos elementos hijos
    - firstChild - Devuelve el primer nodo hijo
    - firstElementChild - Devuelve el último nodo elemento hijo
    - lastChild - Devuelve el último nodo hijo
    - lastElementChild - Devuelve el último nodo elemento hijo
    - hasChildNodes() - Devuelve true si el nodo tiene hijos sino false
*/

console.log(parent.childNodes)

console.log(parent.children)
console.log(parent.children[3])

console.log(parent.firstChild)
console.log(parent.firstElementChild)

console.log(parent.lastChild)
console.log(parent.lastElementChild)

console.log(parent.firstChild.hasChildNodes())
console.log(parent.firstElementChild.hasChildNodes())

/* Hermanos - siblings (Nodo al mismo nivel)
    - nextSibling - Devuelve el siguiente nodo hermano
    - nextElementSibling -
    - previousSibling
    - previousElementSibling
*/

console.log(parent.nextSibling)
console.log(parent.parentElement.nextElementSibling)

console.log(parent.parentElement.previousSibling)
console.log(parent.parentElement.previousElementSibling)

/* Investigar sobre
    - closest(selector) - devuelve el ascendiente más cercano al
    elemento actual (o el propio elemento actual) que coincida
     con el selector proporcionado por parámetro.
*/

console.log(parent.closest("nav ul")) //Devuelve solo familia de padres
console.log(parent.closest("body nav"))

console.log(parent.closest("#ull"));