let turno = true;
let posicion = [];
let turnoXO;

function resetear(A, B, C) {
  document.getElementById('po' + A).style.color = "#456170";
  document.getElementById('po' + B).style.color = "#456170";
  document.getElementById('po' + C).style.color = "#456170";
  setTimeout(function () {
    location.reload();
  }, 3000);
}

function empate_reset() {
  setTimeout(function () {
    location.reload();
  }, 3000);
}

function EncontrarGanador() {
  for (let i = 1; i <= 9; i++) {
    posicion[i] = document.getElementById('po' + i).innerHTML;
  }

  // Combinaciones ganadoras
  const combinaciones = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // Horizontales
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // Verticales
    [1, 5, 9], [3, 5, 7]             // Diagonales
  ];

  for (let combo of combinaciones) {
    const [a, b, c] = combo;
    if (posicion[a] === posicion[b] && posicion[b] === posicion[c] && posicion[a] !== "") {
      Swal.fire({
        title: 'Ganador!',
        text: "El Jugador: " + posicion[a] + " es el ganador",
        icon: 'success',
        confirmButtonText: 'Aceptar'
      }).then(() => {
        resetear(a, b, c);
      });
      return;
    }
  }

  // Verificar empate
  if (posicion.every(p => p !== "")) {
    Swal.fire({
      title: 'Empate!',
      text: 'Los Jugadores empataron',
      icon: 'info',
      confirmButtonText: 'Aceptar'
    }).then(() => {
      empate_reset();
    });
  }
}

function insertar(id) {
  let b = document.getElementById(id);
  if (b.innerHTML == "") {
    b.innerHTML = turno ? "X" : "O";
    turno = !turno;
    EncontrarGanador();
  }
}
