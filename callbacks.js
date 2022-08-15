/* const getUser = (id, cb) => {
    const user = {
        name: 'Sax',
        id: id // Se puede colocar solo id
    }

    cb(null, user) // Sin errores
    cb("Error desconocido") // Enviando solo err

    // Generalizacion de uso
    if (id == 2) cb('Id invalido')
    else cb(null, user)
}

getUser(2, (err, user) => {
    if (err) return console.log(err)
    console.log(`User name is ${user.name}`);
}) */

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

const getUserC = (id, cb) => {
    const user = users.find(user => user.id == id)

    if (!user) cb(`Not exist a user with id ${id}`)
    else cb(null, user)
}

const getEmail = (user, cb) => {
    const email = emails.find(email => email.id == user.id)
    if (!email) cb(`${user.name} hasn't email.`)
    else cb(null, {
        id: user.id,
        name: user.name,
        email: email.email
    })

}

getUserC(4, (err, user) => {
    if (err) return console.log(err)

    getEmail(user, (err, res) => {
        if (err) return console.log(err)
        console.log(res)
    })
})