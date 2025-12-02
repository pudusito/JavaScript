// 1. Declaración de variables globales
let datos = [];

// 2. Definición de funciones puras
function procesarDato(dato) {
  return dato.toUpperCase();
}

// 3. Funciones que interactúan con el DOM
function mostrarResultado(resultado) {
  document.getElementById("salida").textContent = resultado;
}

// 4. Asignación de eventos
document.getElementById("boton").addEventListener("click", () => {
  const entrada = document.getElementById("input").value;
  const resultado = procesarDato(entrada);
  mostrarResultado(resultado);
});

