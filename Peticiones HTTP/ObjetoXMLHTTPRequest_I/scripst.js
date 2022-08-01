const button = document.getElementById('button')

button.addEventListener('click', () => {
    let xhr
    //Este es soportado casi para la mayoría de navegadores actuales
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest()
    }
    //Pero en caso de requerir para navegadores antiguos como el IE de versiones anteriores a la usamos:
    else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP")
    }

    //Abrimos la conexión
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')

    //Tratamos los datos

    //Para comprobar si la petición llegó usamos load
    xhr.addEventListener('load', (data) => {
        const dataJSON = JSON.parse(data.target.response) //Convertimos la respuesta en formato JSON ya que llega en String

        const list = document.getElementById('list')
        for (const userInfo of dataJSON) {
            const listItem = document.createElement('li')
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`

            list.appendChild(listItem)
        }
    }) 

    //Enviamos la conexión
    xhr.send()
})