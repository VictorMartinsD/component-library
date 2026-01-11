function copyCode(id) {
  const element = document.getElementById(id);
  if (!element) return;

  const textToCopy = element.textContent.trim();

  navigator.clipboard.writeText(textToCopy).then(() => {
    const btn = document.querySelector(`button[onclick="copyCode('${id}')"]`);
    if (btn) {
      const originalText = btn.textContent;
      btn.textContent = "Copiado!";
      btn.style.background = "#59ff91";
      btn.style.color = "#131516";

      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = "var(--brand-light)";
        btn.style.color = "#131516";
      }, 2000);
    }
  });
}
