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

// Función para quitar un libro de la pila (implementando pop)
function quitarLibro() {
    let index = pilaLibros.lastIndexOf(libro => libro !== null);
    if (index === -1) {
        console.log("La pila de libros está vacía.");
    } else {
        let libroQuitado = pilaLibros[index];
        pilaLibros[index] = null;
        console.log(`El libro "${libroQuitado.titulo}" ha sido quitado de la pila.`);
    }
}


function mostrarPila() {
    console.log("Pila actual de libros:");
    pilaLibros.forEach((libro, index) => {
        if (libro !== null) {
            console.log(`${index + 1}. Título: ${libro.titulo}, Autor: ${libro.autor}, Género: ${libro.genero}`);
        } else {
            console.log(`${index + 1}. Espacio vacío`);
        }
    });
}


function mostrarMenu() {
    console.log("\nMenú:");
    console.log("1. Agregar un libro");
    console.log("2. Quitar un libro");
    console.log("3. Mostrar la pila actual de libros");
    console.log("4. Salir");
}


function handleAgregarLibro() {
    rl.question('Ingrese el título del libro: ', (titulo) => {
        rl.question('Ingrese el autor del libro: ', (autor) => {
            rl.question('Ingrese el género del libro: ', (genero) => {
                let nuevoLibro = new Libro(titulo, autor, genero);
                agregarLibro(nuevoLibro);
                mostrarMenu();
                pedirOpcion();
            });
        });
    });
}


function handleInput(opcion) {
    switch (opcion.trim()) {
        case "1":
            
            handleAgregarLibro();
            break;
        case "2":
            
            quitarLibro();
            mostrarMenu();
            pedirOpcion();
            break;
        case "3":
            
            mostrarPila();
            mostrarMenu();
            pedirOpcion();
            break;
        case "4":
            
            console.log('Saliendo del programa.');
            rl.close();
            break;
        default:
            console.log("Opción inválida. Por favor, ingrese un número del 1 al 4.");
            mostrarMenu();
            pedirOpcion();
            break;
    }
}


function pedirOpcion() {
    rl.question('Ingrese el número de la opción deseada: ', handleInput);
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


mostrarMenu();


pedirOpcion();