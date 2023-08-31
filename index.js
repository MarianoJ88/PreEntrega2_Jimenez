function VerificarEdad() {
    let edad = parseInt(prompt("Bienvenido a Cine XD. Por favor ingrese su edad: "));

    while (isNaN(edad) || edad > 100 || edad <= 0) {
        alert("Por favor ingrese un número válido.");
        edad = parseInt(prompt("Por favor, ingrese su edad "));
    }

    if (edad < 15) {
        alert("Lo sentimos, el ingreso de menores de 13 años no está permitido");
    } else if (edad > 65) {
        alert("Mayores de 65 años tienen un 15% de descuento");
    } else {
        return edad;
    }
    return edad;
}

const peliculas = [
    { opcion: "1", titulo: "Barbie", sala: "Sala XD", precioBase: 1000 },
    { opcion: "2", titulo: "La monja 2", sala: "Sala Premium", precioBase: 1200 },
    { opcion: "3", titulo: "Elementos", sala: "Sala XD", precioBase: 1500 },
    { opcion: "4", titulo: "Dracula", sala: "Sala 3D", precioBase: 900 }
];

function elegirPelicula(arrayPeliculas) {
    const cartelera = arrayPeliculas.map(pelicula => `${pelicula.opcion}. ${pelicula.titulo} - ${pelicula.sala}`).join('\n');

    while (true) {
        const opcionCartelera = prompt("Seleccione qué película desea ver:\n" + cartelera);

        const peliculaElegida = arrayPeliculas.find(pelicula => pelicula.opcion === opcionCartelera);
        if (peliculaElegida) {
            return peliculaElegida;
        } else {
            alert("Opción inválida");
        }
    }
}

function PrecioEntrada(edad, pelicula) {
    const descuento = 0.20;
    const iva = 0.21;
    const cargoAdmin = 30;

    let subtotal = pelicula.precioBase;

    if (edad >= 65) {
        subtotal = pelicula.precioBase - (pelicula.precioBase * descuento);
    }

    const total = subtotal + (subtotal * iva) + cargoAdmin;

    return total;
}

let edadUsuario = VerificarEdad();
if (edadUsuario >= 15) {
    const peliculaSeleccionada = elegirPelicula(peliculas);
    const precioTotal = PrecioEntrada(edadUsuario, peliculaSeleccionada);
    alert("El precio de su entrada para " + peliculaSeleccionada.titulo + " es: $" + precioTotal.toFixed(2));
}