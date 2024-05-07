/* 6- Realizar una web con un temporizador donde el usuario pueda ingresar un tiempo desde donde comenzará a decrementar el contador. Debe contener los botones, iniciar, pausar y reset. */ 

// Obtenemos referencias a los elementos del DOM
const timeInput = document.getElementById('timeInput');
const display = document.getElementById('display');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

let timer; // Variable para almacenar el intervalo del temporizador
let isRunning = false; // Variable para controlar si el temporizador está corriendo
let timeLeft = 0; // Variable para almacenar el tiempo restante del temporizador en segundos

// Función para actualizar el display del temporizador
function updateDisplay() {
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  display.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
  if (timeLeft === 0) {
    clearInterval(timer);
    isRunning = false;
  } else {
    timeLeft--;
  }
}

function startTimer() {
  if (!isRunning && timeLeft > 0) {
    timer = setInterval(updateDisplay, 1000);
    isRunning = true;
  }
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  timeLeft = parseInt(timeInput.value) || 0;
  updateDisplay();
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
