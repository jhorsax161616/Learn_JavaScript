const form = document.getElementById('form')
const characters = document.getElementById('characters')
const table = document.getElementById('table')

// Escuchamos el evento de submit del formulario -- Revisar esto despues de terminar todo lo del linea 11 en adelante
form.addEventListener('submit', (e) => {
    e.preventDefault()
    // Llamamos a la funcion que hace la peticion GET pero esta ves con un parametro definido(asiRUC)
    getData(characters.children[characters.selectedIndex].value)
})

const getData = (ruc) => {
    let xhr
    //Este es soportado casi para la mayoría de navegadores actuales
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest()
    }
    //Pero en caso de requerir para navegadores antiguos como el IE de versiones anteriores a la usamos:
    else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP")
    }

    // Si es que no nos pasan un id específico o sea no está definido aún
    if (ruc == undefined) {
        // Realizamos la petición GET al puerto en ejecución de la API
        // En este caso estoy usando una API creada con FastAPI que se encuentra en: https://github.com/Sax16/API_Abastecimiento_Hospital
        xhr.open('GET', 'http://localhost:5000/asistentes')
        
        // Validamos si los datos ya han sido obtenidos y se guardan en data
        xhr.addEventListener('load', (data) => {
            // Convertimos los datos a formato JSON para poder trabajarlo
            const dataJSON = JSON.parse(data.target.response)
            console.log(dataJSON)
        
        // Creamos el fragment para poder insertar codigo
        const fragment = document.createDocumentFragment()

        // Recorremos los datos del JSON para insertar cada uno a la seccion de option en el select
        for (const asistente of dataJSON) {
            // Creamos el elemento de tipo option
            const option = document.createElement('OPTION')
            // Insertamos en el atributo value de este option el respectivo id(asiRUC) obtenidos de la base de datos
            // Esto es necesario para poder hacer posteriormente la petición a la base de datos de un asistente en específico por medio de su id(asiRUC)
            option.setAttribute('value', asistente.asiRUC)
            // Insertamos en el contenido el nombre del asistente obtenido de la base de datos
            option.textContent = asistente.asiNombres
            // Lo añadimos en nuestro fragment una vez listo cada asistente
            fragment.appendChild(option)
        }

        // Insertamos en el lable todo el codigo del fragment
        characters.appendChild(fragment)
        })
    }
    // Nos pasan un id específico o sea ya está definido con algun valor(asiRUC)
    else {
        // En este caso tenemos que hacer una peticion con parámetor para recibir datos específicos
        xhr.open('GET', `http://localhost:5000/asistentes/${ruc}`)

        // Validamos si los datos ya han sido obtenidos y se guardan en data
        xhr.addEventListener('load', (data) => {
            // Convertimos los datos a formato JSON para poder trabajarlo
            const dataJSON = JSON.parse(data.target.response)
            console.log(dataJSON)
        
        // Creamos el fragment para poder insertar codigo
        const fragment = document.createDocumentFragment()

        // Creamos la fila para la tabla
        const row = document.createElement('TR')

        // Creamos los elementos para cada campo de la tabla
        const dataRuc = document.createElement('TD')
        const dataNombres = document.createElement('TD')
        const dataApPaterno = document.createElement('TD')
        const dataApMaterno = document.createElement('TD')
        const dataGenero = document.createElement('TD')
        const dataTelefono = document.createElement('TD')
        const dataEmail = document.createElement('TD')

        // Insertamos en su contenido el valor a cada elemento de acuerdo al campo
        dataRuc.textContent = dataJSON.asiRUC
        dataNombres.textContent = dataJSON.asiNombres
        dataApPaterno.textContent = dataJSON.asiApPaterno
        dataApMaterno.textContent = dataJSON.asiApMaterno
        dataGenero.textContent = dataJSON.asiGenero
        dataTelefono.textContent = dataJSON.asiTelefono
        dataEmail.textContent = dataJSON.asiEmail

        //Insertamos todos los datos en la fila
        row.append(dataRuc)
        row.append(dataNombres)
        row.append(dataApPaterno)
        row.append(dataApMaterno)
        row.append(dataGenero)
        row.append(dataTelefono)
        row.append(dataEmail)

        // Insertamos la fila en el fragment
        fragment.appendChild(row)

        // Para que no se queden las filas en la tabla
        if(table.children[1]) {
            //borramos el hijo 1 ya que el 0 son los encabezados
            table.removeChild(table.children[1])
        }
        
        // Insertamos el fragmento(la fila) en la tabla
        table.appendChild(fragment)
        })
    }
    xhr.send()
}

getData()