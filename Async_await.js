/*
    Al poner el "async" indicamos que nuestra función será asíncrona

    await: solo funciona dentro de funciones asíncronoas o generadores asíncronos
    await espera que la promesa se resuelva (o sea que termine lo que tenga que hacer)
*/

/* const getName = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Sax')
        }, 1500)
    })
}

const sayHello = async () => {
    const name = await getName()
    return `Hello ${name}`
}

console.log(sayHello())
sayHello().then(console.log) */

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

const getUser = async (id) => {
    const user = users.find(user => user.id == id)
    // Con throw lanzamos una excepción o un error
    if (!user) throw new Error(`Doesn't exist a user with id ${id}`)
    else return user
}


const getEmail = async (user) => {
    const email = emails.find(email => email.id == user.id)
        
    if (!email) throw new Error(`${user.name} hasn't email.`)
    else return {
        id: user.id,
        name: user.name,
        email: email.email
    }
}

const getInfo = (id) => {
    return getUser(id)
}

console.log(getInfo(1))
getInfo(1).then(console.log)

const getUserEmail = async (id) => {
    try {
        const user = await getUser(id)
        const res = await getEmail(user)
    
        return `The ${user.name}'s email is ${res.email}`
    } catch (error) {
        console.log(error)
    }
}

getUserEmail(3).then(console.log)
getUserEmail(2).then(console.log)