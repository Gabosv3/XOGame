let jugador1 = ""; // Variable para almacenar el nombre del Jugador 1
let jugador2 = ""; // Variable para almacenar el nombre del Jugador 2

Swal.fire({
    title: "¡Bienvenido!",
    text: "Para jugar, ingresa los nombres de ambos jugadores y haz clic en la imagen XO para iniciar.",
    confirmButtonText: '¡Entendido!'
});


// Función para solicitar el nombre del Jugador 1
function funcionboton() {
    jugador1 = prompt("Ingrese Nombre del Jugador 1");

    // Validar si el campo está vacío
    if (jugador1 === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El nombre del Jugador 1 no puede estar vacío.' // Usar SweetAlert2 para mostrar error
        });
        return false; // Devolver falso si el nombre está vacío
    }
    return true; // Devolver verdadero si el nombre es válido
}

// Función para solicitar el nombre del Jugador 2
function funcionboton1() {
    jugador2 = prompt("Ingrese Nombre del Jugador 2");

    // Validar si el campo está vacío
    if (jugador2 === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El nombre del Jugador 2 no puede estar vacío.' // Usar SweetAlert2 para mostrar error
        });
        return false; // Devolver falso si el nombre está vacío
    }
    return true; // Devolver verdadero si el nombre es válido
}

// Función para iniciar el juego después de verificar ambos jugadores
function Funcionbotonplay() {
    // Comprobar si ambos jugadores han ingresado nombres válidos
    const jugador1Valido = funcionboton();
    const jugador2Valido = funcionboton1();

    // Validar si ambos jugadores han ingresado nombres
    if (!jugador1Valido && !jugador2Valido) {
        Swal.fire({
            icon: 'warning',
            title: 'Error',
            text: 'Debe ingresar los nombres de ambos jugadores.' // Si ambos nombres son inválidos
        });
    } else if (!jugador1Valido) {
        Swal.fire({
            icon: 'warning',
            title: 'Error',
            text: 'Debe ingresar el nombre del Jugador 1.' // Si el nombre del Jugador 1 es inválido
        });
    } else if (!jugador2Valido) {
        Swal.fire({
            icon: 'warning',
            title: 'Error',
            text: 'Debe ingresar el nombre del Jugador 2.' // Si el nombre del Jugador 2 es inválido
        });
    } else {
        // Si ambos nombres son válidos, iniciar el juego
        Swal.fire({
            icon: 'success',
            title: '¡Listo!',
            text: `¿Listo ${jugador1} y ${jugador2}? ¡Iniciemos!` // Mostrar mensaje con los nombres ingresados
        }).then(() => {
            location.href = "XO.html"; // Redirigir a la página del juego después de la confirmación
        });
    }
}
