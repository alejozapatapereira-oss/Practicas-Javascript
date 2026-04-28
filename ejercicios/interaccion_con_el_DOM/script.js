let Titulo = document.querySelector(".Ejercicio1 h1");
let Button = document.querySelector(".Ejercicio1 button");
Button.addEventListener("click", () => {
  Titulo.textContent = "Texto Cambiado";
});

let parrafo2 = document.querySelector(".Ejercicio2 p");
let button2 = document.querySelector(".Ejercicio2 button");
button2.addEventListener("click", () => {
  parrafo2.classList.toggle("activo");
});
