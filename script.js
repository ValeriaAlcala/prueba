let contador = 0;

function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("show");
}

function showContent(page) {
  const contentDiv = document.getElementById("content");

  if (page === 'home') {
    const totalDrinks = localStorage.getItem('totalDrinks') || 0;
    contentDiv.innerHTML = `
      <h1>Contador de Registros Completados</h1>
      <p>Total de registros completados: <span id="contador">${totalDrinks}</span></p>
    `;
  } else if (page === 'fresh') {
    contentDiv.innerHTML = `
      <!-- Fresh page content here -->
    `;

    const formularioDatos = document.getElementById("formularioDatos");
    formularioDatos.addEventListener("submit", function(event) {
      event.preventDefault();
      contador++;
      const contadorSpan = document.getElementById("contador");
      contadorSpan.textContent = contador;
      localStorage.setItem('totalDrinks', contador);
      formularioDatos.reset();
    });
  }
}

// Mostrar Home por defecto
showContent('home');


// Mostrar Home por defecto
showContent('home');
