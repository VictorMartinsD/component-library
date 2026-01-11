function copyCode(id) {
  const element = document.getElementById(id);
  if (!element) return;

  const textToCopy = element.textContent.trim();

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      const btn = document.querySelector(`button[onclick="copyCode('${id}')"]`);
      if (btn) {
        const originalText = btn.textContent;
        btn.textContent = "Copiado!";
        btn.style.background = "#59ff91";

        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = "#59b2ff";
        }, 2000);
      }
    })
    .catch((err) => {
      console.error("Erro ao copiar: ", err);
    });
}
