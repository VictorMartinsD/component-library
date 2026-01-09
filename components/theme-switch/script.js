// 1. Variáveis Globais e Seletores de Elementos
const themeToggle = document.getElementById("theme-toggle");
const themeText = document.getElementById("theme-text");

// 2. Funções Principais

// 3. Eventos (Clicks, Forms, etc)
themeToggle.addEventListener("click", () => {
  themeToggle.classList.toggle("active");

  if (themeToggle.classList.contains("active")) {
    themeText.textContent = "Claro";
  } else {
    themeText.textContent = "Escuro";
  }
});
