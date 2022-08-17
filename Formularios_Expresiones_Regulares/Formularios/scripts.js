const form = document.getElementById('form')
const button = document.getElementById('submitButton')

const name = document.getElementById('name')
const email = document.getElementById('email')
const gender = document.getElementById('gender')
const terms = document.getElementById('terms')

var formIsValid = {
    name: false,
    email: false,
    gender: false,
    terms: false
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    validateForm()
})

// change - Registra el evento cada vez que el campo a cambiado
name.addEventListener('change', (e) => {
    if (e.target.value.trim().length > 0) formIsValid.name = true
    else formIsValid.name = false
})

email.addEventListener('change', (e) => {
    if (e.target.value.trim().length > 0) formIsValid.email = true
    else formIsValid.email = false
})
// Este no es valido
gender.addEventListener('change', (e) => {
    if(e.target.checked == true) formIsValid.gender = true
})

terms.addEventListener('change', (e) => {
    formIsValid.terms = e.target.checked
    e.target.checked ? button.removeAttribute('disabled') :
    button.setAttribute('disabled', true)
})

const validateForm = () => {
    const formValues = Object.values(formIsValid)

    const valid = formValues.findIndex(value => value == false)

    if (valid == -1) form.submit()
    else alert(`Invalid form`)
}