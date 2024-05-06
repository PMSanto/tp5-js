/* 3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin.
 */

document.addEventListener("DOMContentLoaded", function () {
  const inputTarea = document.getElementById("inputTarea");
  const botonAgregar = document.getElementById("botonAgregar");
  const listaTareas = document.getElementById("listaTareas");

  function agregarTarea() {
    const nuevaTarea = inputTarea.value.trim();

    if (nuevaTarea !== "") {
      const nuevaTareaElemento = document.createElement("li");
      nuevaTareaElemento.textContent = nuevaTarea;
      nuevaTareaElemento.classList.add("list-group-item");

      const botonEliminar = document.createElement("button");
      botonEliminar.textContent = "Eliminar";
      botonEliminar.classList.add("btn", "btn-danger", "btn-sm", "ms-2");
      botonEliminar.addEventListener("click", function () {
        listaTareas.removeChild(nuevaTareaElemento);
      });

      nuevaTareaElemento.appendChild(botonEliminar);

      listaTareas.appendChild(nuevaTareaElemento);

      inputTarea.value = "";
    } else {
      alert("Ingrese la tarea para agregar");
    }
  }

  botonAgregar.addEventListener("click", agregarTarea);
});
