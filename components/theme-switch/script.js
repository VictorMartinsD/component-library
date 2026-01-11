// Lógica do Componente
const themeToggle = document.getElementById("theme-toggle");
const themeText = document.getElementById("theme-text");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isActive = themeToggle.classList.toggle("active");
    themeText.textContent = isActive ? "Claro" : "Escuro";
  });
}

// Função de Cópia Global
function copyCode(id) {
  const element = document.getElementById(id);
  if (!element) return;

  const textToCopy = element.textContent.trim();

  navigator.clipboard.writeText(textToCopy).then(() => {
    const btn = document.querySelector(`button[onclick="copyCode('${id}')"]`);
    if (btn) {
      const originalText = btn.textContent;
      btn.textContent = "Copiado!";
      btn.style.color = "#131516";
      btn.style.background = "#59ff91";

      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = "var(--brand-light)";
        btn.style.color = "#131516";
      }, 2000);
    }
  });
}
