/* Crear e Insertar elementos */

const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes',
'Sábado', 'Domingo']

const title = document.getElementById('title')
const dayList = document.getElementById('daysList')
const selectDays = document.getElementById('daysSelect')

// document.createElement(element) - Crea un elemento
const itemList = document.createElement('LI');

// element.textContent = 'text' - Escribe texto en un elemento
/* itemList.textContent = 'Lunes'; */

// parent.appendChild(element) - Añadir un elemento al DOM
dayList.appendChild(itemList)

/* Si necesitamos insertar etiquetas HTML al DOM entonces usamos: */
title.innerHTML = 'DOM - <span>Crear e Insetar Elementos I</span>';


for (const day of days) {
    itemList.innerHTML += `<li>${day}</li>` // PERO NO ES CONVENIENTE
}

/* En lugar de innerHTML usamos ahora  */
// document.createDocumentFragment() - Fragmentos de código

const fragment = document.createDocumentFragment()

for (const day of days) {
    const item = document.createElement('OPTION')
    item.setAttribute('value', day.toLowerCase())
    item.textContent = day
    fragment.appendChild(item)
}

selectDays.appendChild(fragment)