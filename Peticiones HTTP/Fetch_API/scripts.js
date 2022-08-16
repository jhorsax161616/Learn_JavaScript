/* 
    Fetch API
    ---------
    Proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, como
        peticiones y respuestas.
    También provee un método global fetch() que proporciona una forma fácil y lógica de obtener
        recursos de forma asincrona por la red.

    Esta basado en promesas, por lo cual tiene un response y un reject internos
        RESPONSE tiene varios métodos
        arrayBuffer(): Archivos binarios en bruto (mp3, pdf, jpg, ...) Utilizado para
                        manipular el contenido del archivo.
        blob(): Archivos binarios en bruto (mp3, pdf, jpg, ...) cuando no se necesita
                    manipular el contenido y se va a trabajar con el archivo directamente
        clone(): Crea un clon de un objeto de respuesta, idéntico en todos los sentidos, pero
                    almacenado en una variable diferente
        formData(): Se utilzia para leer los objetos formData
        json(): Convierte los archivos json en un objeto de JavaScript
        text(): Se utiliza cuando queremos leer un archivo de texto. (Siempre codificado en UTF-8)
        
        // Podemos comprobar si el navegador soporta fetch () -- Actualmente solo IE no los soporta
        if (window.fetch != undefined) console.log('FETCH OK')
        else console.log('FETCH NO AVAILABLE!!')
*/

const button = document.getElementById('button')

button.addEventListener('click', () => {
    // El método por defecto es el GET
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res)) // Seguridad para comprobar si obtuvimos respuesta
        .then(res => res.json())
        .then(res => {
            const list = document.getElementById('list')
            const fragment = document.createDocumentFragment()

            for (const userInfo of res) {
                const listItem = document.createElement('li')
                listItem.textContent = `${userInfo.id} - ${userInfo.name}`
                fragment.appendChild(listItem)
            }
            list.appendChild(fragment)
        })
})