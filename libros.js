function crearlibro(libro){
    console.log(libro)
}

class Libro{
    titulo= ''
    autor=''
    ISBN =''
    cantidadPag= 0

    constructor(titulov, autorv, ISBNv, cantidadPagv){
        console.log("Se esta instanciando un nuevo libro con titulo", titulov)
        this.titulo = titulov
        this.ISBN = ISBNv
        this.autor = autorv
        this.cantidadPag = cantidadPagv
    }

    alquilar(){
        console.log("se compro el libro", this.titulo)
    }

}

const libro1= new Libro();
libro1.titulo= 'El principito'
libro1.autor= 'Antoine de Saint-Exupéry'
libro1.ISBN='1237484'
libro1.cantidadPag=250

const libro2= new Libro('Alicia en el pais de las maravillas',  'Lewis Carroll','9638745',300)
const libro3= new Libro('Orgullo y prejuicio', 'Jane Austen', '1234567', 400)
crearlibro(libro2)
crearlibro(libro1)
crearlibro(libro3)
libro2.alquilar()

let libros = []

//insertando en el arreglo libros

libros.push(libro1)
libros.push(libro2)
libros.push(libro3)
console.log(libros)

//select
const filtro = libros.find(filtros => {
    return filtros.cantidadPag === 400
})

console.log(filtro, "select");

//Update

const filtro1 = libros.find(filtro => {
    return filtro.cantidadPag === 300
})
filtro1.nombre = "Alicia en el pais de las maravillas updated"

console.log(filtro1)
console.log(libros)

//Delete
libros = libros.filter(elemento => elemento.cantidadPag !== 400)
console.log(libros, "deleted")

