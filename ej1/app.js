/* 1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
*/

//Al utilizar document.addEventListener("DOMContentLoaded", function() {...}), estás diciendo que quieres ejecutar una función específica cuando el evento "DOMContentLoaded" ocurra. Esto es útil porque garantiza que tu código JavaScript se ejecute solo cuando el DOM esté completamente cargado y listo para ser manipulado. De esta manera, evitas errores o comportamientos inesperados que podrían ocurrir si intentas acceder a elementos del DOM antes de que se hayan cargado completamente.

document.addEventListener("DOMContentLoaded", function () {
  let numeroMagico;
  function generarNumeroAleatorio() {
    numeroMagico = Math.floor(Math.random() * 100) + 1;
  }

  function mostrarAlerta(mensaje) {
    alert(mensaje);
  }

  function iniciarJuego() {
    generarNumeroAleatorio();
    document.getElementById("startBtn").style.display = "none";
    document.getElementById("gameContainer").style.display = "block";
  }

  function enviarNumero() {
    const guessInput = document.getElementById("guessInput");
    const guess = parseInt(guessInput.value);

    if (isNaN(guess)) {
      mostrarAlerta("Error, ingresa un numero");
      return;
    }

    if (guess === numeroMagico) {
      mostrarAlerta("Te ganaste un 0km");
    } else if (guess < numeroMagico) {
      mostrarAlerta("Fallaste, jaja");
    } else {
      mostrarAlerta("Jaja, fallaste");
    }
  }

  document.getElementById("startBtn").addEventListener("click", iniciarJuego);

  document.getElementById("guessBtn").addEventListener("click", enviarNumero);
});
