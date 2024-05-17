const readline = require('readline');


class Libro {
    constructor(titulo, autor, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
    }
}


let pilaLibros = [];


for (let i = 0; i < 20; i++) {
    pilaLibros.push(null);
}


function agregarLibro(libro) {
    
    let index = pilaLibros.indexOf(null);
    if (index !== -1) {
        pilaLibros[index] = libro;
        console.log(`El libro "${libro.titulo}" ha sido agregado a la pila.`);
    } else {
        console.log("La pila de libros está llena. No se puede agregar más libros.");
    }
}