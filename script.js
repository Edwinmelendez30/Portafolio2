document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("mensaje").textContent = "¡Gracias por tu mensaje!";
  });
  