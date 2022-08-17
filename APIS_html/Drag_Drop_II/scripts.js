const pendingTasks = document.getElementById('pending-tasks')
const finishedTasks = document.getElementById('finished-tasks')
//dataTransfer
//setData: Establece la información que queremos compartir
//getData: Establece la información que queremos obtener
pendingTasks.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id)
})

pendingTasks.addEventListener('drag', (e) => {
    e.target.classList.add('active')
})

pendingTasks.addEventListener('dragend', (e) => {
    e.target.classList.remove('active')
})

//OBLIGATORIO, SI NO, NO FUNCIONA
finishedTasks.addEventListener('dragover', (e) => {
    e.preventDefault()
})

finishedTasks.addEventListener('drop', (e) => {
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text/plain'))
    element.classList.remove('active')

    if (element.parentNode.getAttribute('id') != 'finished-tasks')
    {
        finishedTasks.appendChild(pendingTasks.removeChild(element))
    }
})



finishedTasks.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id)
})

finishedTasks.addEventListener('drag', (e) => {
    e.target.classList.add('active')
})

finishedTasks.addEventListener('dragend', (e) => {
    e.target.classList.remove('active')
})

pendingTasks.addEventListener('dragover', (e) => {
    e.preventDefault()
})

pendingTasks.addEventListener('drop', (e) => {
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text/plain'))
    element.classList.remove('active')
    
    if (element.parentNode.getAttribute('id') != 'pending-tasks')
    {
        pendingTasks.appendChild(finishedTasks.removeChild(element))
    }
})
