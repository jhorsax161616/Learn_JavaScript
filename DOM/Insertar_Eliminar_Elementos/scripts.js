/* Insertar  y eliminar elementos II

    parent.insertBefore(newElement, referenceElement) - Insertar un elemento antes
    del elemento de referencia
    
    SOPORTE TOTAL
    
    parent.insertAdjacentElement(position, element)
    parent.insertAdjacentHTML(position, HTML)
    parent.insertAdjacentText(position, text)

    Positions:
        beforebegin - Antes de que empiece (hermano anterior)
        afterbegin - después de que empiece (primer hijo)
        beforeend - antes de que acabe (último hijo)
        afterend - después de que acabe (hermano siguiente)

        parent.replaceChild(newChild, oldChild) - Reemplaza un hijo por otro
*/

const list = document.getElementById('list')
const newElement = document.createElement('li')
newElement.textContent = "I'm a new element"

list.insertBefore(newElement, list.children[1]) // Se puede colocar en cualquer lugar

const list2 = document.getElementById('list2')
const newElement2 = document.createElement('li')
newElement2.textContent = "I'm a new element 2..."

list2.children[2].insertAdjacentElement('beforebegin', newElement2)

const list3 = document.getElementById('list3')
const newElement3 = document.createElement('li')
newElement3.textContent = "I'm a new element 3..."

list3.insertAdjacentElement('afterbegin', newElement3)

const list4 = document.getElementById('list4')
const newElement4 = document.createElement('li')
newElement4.textContent = "I'm a new element 4..."

list4.insertAdjacentElement('beforeend', newElement4)

const list5 = document.getElementById('list5')
const newElement5 = document.createElement('li')
newElement5.textContent = "I'm a new element 5..."

list5.children[1].insertAdjacentElement('afterend', newElement5)

/* Existen otras 2 opciones curiosas */
list.insertAdjacentHTML('afterend', "<h2 id='subtitle'>Elemento con HTML</h2>")

list5.insertAdjacentText('afterend', '<h2>Elemento con TEXT</h2>')

/* Reemplazando un hijo por otro */
const replacee = document.createElement('li')
replacee.textContent = "I'm replace"

list4.replaceChild(replacee, list4.children[0])


/* DOM manipulation convenience methods JQuery 

    positions:
        parent.before() - Antes de que empiece (hermano anterior)
        parent.prepend() - después de que empiece (primer hijo)
        parent.append() - antes de que acabe (último hijo)
        parent.after - después de que acabe (hermano siguiente)

        child.replaceWith(newChild)
*/
const ele = document.createElement('h2')
ele.textContent = "Hello1"

list.before(ele)

const pre = document.createElement('h3')
pre.textContent = "Hello2"

list2.prepend(pre)

const app = document.createElement('h3')
app.textContent = "Hello3"

list3.append(app)

const aft = document.createElement('h3')
aft.textContent = "Hello4"

list5.after(aft)

/* Una forma más comoda de reemplazar elementos */

const repla = document.createElement('h4')
repla.textContent = "EASY REPLACE"

document.getElementById('subtitle').replaceWith(repla)


/* Colnar y eliminar elementos
        element.cloneNode(true|false) - Clona el nodo. Si le pasamos true,
            clona todo el elemento con los hijos, si no sin hijos

        element.remove() - Elimina el nodo del DOM
        element.removeChild(child) - Elimina el nodo hijo del DOM
*/

console.log(list2.cloneNode(true)) //tener cuidado con los ID ya que se clona tal cual
console.log(list2.cloneNode(false)) 

/* list5.remove()

list4.removeChild(list4.children[1]) */