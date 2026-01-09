# 🔘 Theme Switch Toggle

Componente de alternância de tema (Dark/Light) desenvolvido com foco em acessibilidade, performance de animação e consistência visual.

## 🖼️ Preview do Componente

<div align="center">
  <img src="https://github.com/user-attachments/assets/cf591f19-09f4-402f-bc69-c5531b67be46" alt="Demonstração do Theme Switch Toggle" width="350">
  <p><i>Visualização do botão de alternância entre os estados Escuro e Claro.</i></p>
</div>

---

## 🏗️ Estrutura HTML

A estrutura utiliza um wrapper para controle de layout e elementos semânticos para acessibilidade.

```html
<div class="theme-switch-container">
  <label>Estilo</label>
  <div class="switch-wrapper">
    <button
      type="button"
      class="dark-light"
      id="theme-toggle"
      aria-label="Alternar tema"
    >
      <span class="toggle-circle"></span>
    </button>
    <p id="theme-text">Escuro</p>
  </div>
</div>
```

---

## 🧠 Estudo Ativo: Notas Técnicas

### 1. Estrutura e Acessibilidade

- **Tag `<button>`**: Utilizada no lugar de `div` ou `span` para garantir que o elemento seja interativo por padrão (focável via teclado e reconhecido por leitores de tela).
- **`aria-label`**: Adicionado para descrever a função do botão para usuários de tecnologias assistivas.

### 2. Layout e Alinhamento (Flexbox)

- **`switch-wrapper`**: Utiliza `display: flex` com `align-items: center` para garantir que o botão e o texto descritivo fiquem perfeitamente alinhados na horizontal.
- **`gap: 12px`**: Define um espaçamento fixo e moderno entre os elementos, sem a necessidade de margens individuais.
- **`margin-top: 8px`**: Garante o respiro visual em relação ao label superior.

### 3. O "Pulo do Gato" da Animação

- **`transform: translateX(30px)`**: A bolinha é movida usando `transform` em vez de `margin` ou `left`.
  - _Por que?_ O `transform` é processado pela GPU e não causa "Reflow" (recalculo de layout) no navegador, resultando em uma transição muito mais fluida (60fps).
- **`cubic-bezier(0.4, 0, 0.2, 1)`**: Utilizado na transição para criar um movimento mais natural ("aceleração e desaceleração") do que uma transição linear simples.

### 4. Consistência Visual

- **Borda Persistente**: A propriedade `border: 1px solid var(--input-stroke)` é mantida tanto no estado padrão quanto no `.active`. Isso evita o "salto" de 1px que ocorreria se a borda fosse removida ou adicionada dinamicamente.
- **Padding Interno**: O uso de `padding: 4px` no container do botão cria automaticamente o respiro necessário para a bolinha em todos os lados.

---

## 🛠️ Código Unificado (CSS)

```css
.switch-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 8px;
}

.dark-light {
  cursor: pointer;
  width: 64px;
  height: 32px;
  border-radius: 999px;
  padding: 4px;
  display: flex;
  align-items: center;
  background-color: var(--input-base);
  border: 1px solid var(--input-stroke);
  transition: background-color 0.2s ease, border-color 0.2s ease;
  appearance: none;
  -webkit-appearance: none;
}

.toggle-circle {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: var(--input-stroke);
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s;
}

.dark-light.active {
  background-color: var(--brand-light);
  border: 1px solid var(--input-stroke);
}

.dark-light.active .toggle-circle {
  background-color: var(--text-heading);
  transform: translateX(30px);
}
```

---

## ⚡ Lógica de Comportamento (JS)

```javascript
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
```

---

## 👨‍💻 Autor

Desenvolvido por **Victor Martins Dias**.

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/VictorMartinsD)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/VictorMartinsD)
