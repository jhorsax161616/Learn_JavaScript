/* 
    Fetch API
        Para hacer peticiones POST, fecht admite un segund parámetro:

        fetch(url, {
            method: 'POST',
            body: Los daos que enviamos. Si es un objeto hay que convertirlo con JSON(stringify),
            headers: {
                cabeceras de información sobre lo que estamos enviando
                https://developer.mozilla.org/es/docs/Web/HTTP/Headers
            }
        })
*/

/* const button = document.getElementById('button')

button.addEventListener('click', () => {
    const newAssistant = {
        asiRUC: "10446186715",
        asiNombres: "Francisco Jose",
        asiApPaterno: "Coronado",
        asiApMaterno: "Torre",
        asiGenero: 'Masculino',
        asiTelefono: '957523145',
        asiEmail: 'coronado@email.com'
    }
    //No podemos enviar un objeto sino un JSON
    console.log(JSON.stringify(newAssistant))

    fetch('http://localhost:5000/asistentes', {
        method: 'POST',
        body: JSON.stringify(newAssistant),
        headers: {
            "Content-type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
}) */

// MISMO PROBLEMA QUE CON REQUEST

const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    sendData(form)
})

const sendData = (data) => {
    console.log(data)

    const formData = new FormData(data)


    fetch('http://localhost:5000/asistentes', {
        method: 'POST',
        body: formData,
        headers: {
            "Content-type": "application/x-www-form-urlencoded"
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
}