function toggleMenu () {
    document.querySelector('.hamburger').classList.toggle("open");
    document.querySelector('.nav-menu').classList.toggle("open");
}

document.querySelector('.hamburger').addEventListener("click", toggleMenu);

// Variables
let contador = 0;

function toggleMenu() {
  // Código existente...
}

// Event listener para el envío del formulario en la página "FRESH"
document.getElementById("drink-form").addEventListener("submit", function(event) {
  event.preventDefault();
  contador++;
  updateOrderNumber(); // Llama a la función para actualizar el contador en la página "HOME"
  // Resto del código para manejar el envío del formulario en la página "FRESH"...
});

// Función para actualizar el número de órdenes en la página "HOME"
function updateOrderNumber() {
  const orderNumberElement = document.getElementById("orderNumber");
  orderNumberElement.textContent = contador;
}

// Llamada inicial para actualizar el contador al cargar la página "HOME"
updateOrderNumber();
