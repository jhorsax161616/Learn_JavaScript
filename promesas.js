// Una promesa es un objeto con 2 callbacks internos

const users = [
    {
        id: 1,
        name: 'Sax'
    },
    {
        id: 2,
        name: 'Naolan'
    },
    {
        id: 3,
        name: 'Lisa'
    }
]

const emails = [
    {
        id: 1,
        email: 'Sax@gmail.com'
    },
    {
        id: 2,
        email: 'Naola@gmail.nor'
    }
]

const getUserP = (id) => {
    const user = users.find(user => user.id == id)
    //En la promesa resolve se ejecuta si todo salió bien
    // Y reject se ejecuta cuando tenemos algun error
    const promise = new Promise((resolve, reject) => {
        if (!user) reject(`Doesn't exist a user with id ${id}`)
        else resolve(user)
    })

    return promise;
}

//console.log(getUserP(1))

/* Para poder leer el contenido de la promesa usamos .then (acceder al valor)
Y para el error usamos .cath */
getUserP(5)
    .then(user => console.log(user))
    .catch(err => console.log(err))

const getEmail = (user) => {
    const email = emails.find(email => email.id == user.id)

    return promise = new Promise((resolve, reject) => {
        if (!email) reject(`${user.name} hasn't email.`)
        else resolve({
            id: user.id,
            name: user.name,
            email: email.email
        })
    })
}

// Una ventaja de las promesas es que solo se necesita un cath para manejar todos los errores

getUserP(3)
    .then(user => {
        return getEmail(user)
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))

// Se puede simplificar a:

getUserP(1)
    .then(getEmail)
    .then(console.log)
    .catch(console.log)

/* Una curiosidad de esto es que las promesas son asincronos, lo podemos conprobar en
la consola ya que primero se ejecuta la ultima funcion */