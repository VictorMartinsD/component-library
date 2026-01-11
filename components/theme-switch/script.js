// 1. Variáveis do Switch
const themeToggle = document.getElementById("theme-toggle");
const themeText = document.getElementById("theme-text");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isActive = themeToggle.classList.toggle("active");
    themeText.textContent = isActive ? "Claro" : "Escuro";
  });
}

// 2. Função de Copiar
function copyCode(id) {
  const element = document.getElementById(id);

  if (!element) {
    console.error("Elemento não encontrado: " + id);
    return;
  }

  const textToCopy = element.textContent.trim();

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      // Feedback visual no botão
      // Buscamos o botão que tem o onclick com o ID específico
      const btn = document.querySelector(`button[onclick="copyCode('${id}')"]`);

      if (btn) {
        const originalText = btn.textContent;
        btn.textContent = "Copiado!";
        btn.style.color = "#59ff91"; // Verde para sucesso

        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.color = ""; // Volta ao padrão
        }, 2000);
      }
    })
    .catch((err) => {
      console.error("Erro ao copiar: ", err);
      alert(
        "Erro ao copiar. Verifique se seu navegador permite acesso à área de transferência."
      );
    });
}
