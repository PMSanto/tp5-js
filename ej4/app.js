/* 4- Crear una web con un reloj que muestre la siguiente información:*/

document.addEventListener("DOMContentLoaded", function () {
  const fechaHoraElemento = document.getElementById("fechaHora");
  const diaElemento = document.getElementById("dia");

  function actualizarFechaHora() {
    const ahora = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    const fechaHora = ahora.toLocaleDateString("es-ES", options);
    fechaHoraElemento.textContent = fechaHora;
    const dia = ahora.toLocaleDateString("es-ES", { weekday: "long" });
    diaElemento.textContent = `Hoy es ${dia} 📆📆`;
  }

  setInterval(actualizarFechaHora, 1000);
  actualizarFechaHora();
});
