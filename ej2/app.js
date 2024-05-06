/* 2- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.
*/

class Persona {
  constructor(nombre, edad, DNI, sexo, peso, altura, añoNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.DNI = DNI;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.añoNacimiento = añoNacimiento;
  }

  mostrarGeneracion() {
    const generacion = this.calcularGeneracion();
    let mensaje = `${this.nombre} pertenece a ${generacion}. `;
    switch (generacion) {
      case "Generacion Z":
        mensaje += "Rasgo caracteristico: Irreverencia";
        break;
      case "Millennials":
        mensaje += "Rasgo caracteristico: Frustracion";
        break;
      case "Generacion X":
        mensaje += "Rasgo caracteristico: Obsesion por el exito";
        break;
      case "Baby Boom":
        mensaje += "Rasgo caracteristico: Ambicion";
        break;
      case "Silent Generation":
        mensaje += "Rasgo caracteristico: Austeridad";
        break;
      default:
        mensaje += "Generacion no identificada";
        break;
    }
    alert(mensaje);
  }

  esMayorDeEdad() {
    if (this.edad >= 18) {
      alert(`${this.nombre} es mayor de edad.`);
    } else {
      alert(`${this.nombre} no es mayor de edad.`);
    }
  }

  mostrarDatos() {
    let mensaje = `Nombre: ${this.nombre}\n`;
    mensaje += `Edad: ${this.edad}\n`;
    mensaje += `DNI: ${this.DNI}\n`;
    mensaje += `Sexo: ${this.sexo}\n`;
    mensaje += `Peso: ${this.peso}\n`;
    mensaje += `Altura: ${this.altura}\n`;
    mensaje += `Año de Nacimiento: ${this.añoNacimiento}\n`;
    alert(mensaje);
  }

// no me sale el codigo para calcular la generacion, en cualquier caso devuelve generacion no identificada :/

  calcularGeneracion() {
    const añoActual = new Date().getFullYear();
    const edad = añoActual - añoNacimiento;
    if (edad >= 1994 && edad <= 2010) {
      return "Generacion Z";
    } else if (edad >= 1981 && edad <= 1993) {
      return "Millennials";
    } else if (edad >= 1969 && edad <= 1980) {
      return "Generacion X";
    } else if (edad >= 1949 && edad <= 1968) {
      return "Baby Boom";
    } else if (edad >= 1930 && edad <= 1948) {
      return "Silent Generation";
    } else {
      return "Generacion no identificada";
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formularioPersona");
  const btnMostrarGeneracion = document.getElementById("btnMostrarGeneracion");
  const btnEsMayorDeEdad = document.getElementById("btnEsMayorDeEdad");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const edad = parseInt(document.getElementById("edad").value);
    const DNI = document.getElementById("DNI").value;
    const sexo = document.getElementById("sexo").value;
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const añoNacimiento = parseInt(
      document.getElementById("añoNacimiento").value
    );

    const persona = new Persona(
      nombre,
      edad,
      DNI,
      sexo,
      peso,
      altura,
      añoNacimiento
    );
    alert("Persona creada correctamente.");

    btnMostrarGeneracion.addEventListener("click", function () {
      persona.mostrarGeneracion();
    });

    btnMostrarDatos.addEventListener("click", function () {
      persona.mostrarDatos();
    });

    btnEsMayorDeEdad.addEventListener("click", function () {
      persona.esMayorDeEdad();
    });
  });
});
