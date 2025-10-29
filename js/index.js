// Obtener el año actual y colocarlo en el elemento del footer
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("currentYear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
// Cambiar entre modo claro y oscuro
const switchButton = document.getElementById("switch");
const body = document.body;

// Verifica si el usuario ya tenía un modo guardado
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  switchButton.checked = true;
}

switchButton.addEventListener("change", () => {
  if (switchButton.checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }
});
