class Book {
    constructor (title, author, year, genre) {
        this.title = title
        this.author = author
        this.year = year
        this.genre = genre
    }

    info() {
        return `Title: ${this.title}\nAuthor: ${this.author}\nYear: ${this.year}\nGenre: ${this.genre}`
    }
}

const book1 = new Book('Padre porbre Padre rico', 'Pepe', 2017, 'finanzas')
const book2 = new Book('El Hombre mas rico de Babilonia', 'Rostreisky', 2015, 'finanzas')
const book3 = new Book('Mis zonas erroneas', 'Litre', 2012, 'Psicología')

let books = [book1, book2, book3]

const all_books = () => {
    for (let book of books)
    {
        console.log('------------------')
        console.log(book.info())
    }
}

const authors = () => {
    //'Todos los autores ordenado alfabeticamente'
    let auth = [];

    for (let i of books)
    {
        auth.push(i.author)
    }

    auth.sort()
    
    console.log(`Authors:\n------------\n${auth.join('\n')}`)
}

const all_genre = (genre) => {
    //'Todos los libros que pertenecen al genero recibido'
    let boo = [];

    for (let i of books)
    {
        if (i.genre === genre)
        {
            boo.push(i.title)
        }
    }
    console.log(`The ${genre} genre books are: \n-${boo.join('\n-')}`)
}

all_books()
authors()
all_genre('finanzas')