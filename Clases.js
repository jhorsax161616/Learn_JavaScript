class Person {
    constructor (name, last_name, age) {
        this.name = name
        this.last_name = last_name
        this.age = age

        this.id = `${this.name.substring(0, 1)}${this.last_name}${this.age}`
    }

    //metodos
    greet() {
        return `Hello, my name is ${this.name} and I'm ${this.age} years.`
    }

    idd() {
        return this.id
    }
}

const sax = new Person('Jhordan', 'Cordova', 21)
const andrea = new Person('Andrea', 'Mile', 17)

console.log(sax)
console.log(andrea)

console.log(sax.name)
console.log(sax.greet())
console.log(sax.idd())

console.log(andrea.name)
console.log(andrea.greet())
console.log(andrea.idd())