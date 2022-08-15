const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    sendData(form)
})

const sendData = (data) => {
    //NO SE LOGRÓ ENCONTRAR LA SOLUCION A ESTE PROBLEMA, LA RESPUESTA DEL BACKEND ES "POST /asistentes HTTP/1.1" 422 Unprocessable Entity
    //LA API ESTA FUNCIONANDO CORRECTAMENTE ASI QUE CREO QUE TENDRIA QUE VER CON EL JavaScript YA QUE EL ENVÍO POST CON HTML SOLO SÍ ES ACEPTADO
    console.log("No Prosesado")
    /* let xhr
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest()
    else xhr = new ActiveXObject("Microsoft.XMLHTTP")

    xhr.open('POST', 'http://localhost:5000/asistentes', true);
    xhr.setRequestHeader('Content-type', 'www-form-urlencoded');
    //const formData = new FormData(data)

    console.log(data);
    
    const formData = new FormData()
    formData.append('asiRUC', '10446186715');
    formData.append('asiNombres', 'Francisco Jose');
    formData.append('asiApPaterno', 'Coronado');
    formData.append('asiApMaterno', 'Torre');
    formData.append('asiGenero', 'Masculino');
    formData.append('asiTelefono', '957523145');
    formData.append('asiEmail', 'coronado@email.com');
    //let test = {"asiRUC": "10446186715", 'asiNombres':"Francisco Jose", "asiApPaterno":"Coronado", "asiApMaterno":"Torre", 'asiGenero':'Masculino', 'asiTelefono':'957523145', 'asiEmail':'coronado@email.com'}
    
    //console.log(JSON.parse(formData));
    xhr.send(formData) */
}