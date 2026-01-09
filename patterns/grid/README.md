# 📐 Flexbox Alignment Patterns

Este pattern documenta as técnicas mais eficientes de alinhamento e distribuição de espaço utilizando o módulo Flexible Box Layout.

---

## 🧠 Estudo Ativo: Conceitos Chave

### 1. Centralização Absoluta

Para centralizar um elemento perfeitamente (horizontal e verticalmente) dentro de um container, a combinação abaixo é a mais limpa:

```css
.container {
display: flex;
justify-content: center; /_ Eixo Principal (Horizontal por padrão) _/
align-items: center; /_ Eixo Transversal (Vertical por padrão) _/
}
```

### 2. Alinhamento Vertical (Inline-Elements)

Como visto no componente de **Theme Switch**, utilizamos o Flexbox para alinhar itens de diferentes alturas (como o botão e o texto):

```css
.switch-wrapper {
display: flex;
align-items: center; /_ Garante que o texto não fique "subido" em relação ao botão _/
gap: 12px; /_ Substitui o uso de margin para espaçamento interno _/
```

### 3. Flex Direction e Eixos

O Flexbox trabalha com dois eixos. É importante lembrar que ao mudar o `flex-direction` para `column`, as funções de `justify-content` e `align-items` invertem seus sentidos de atuação.

---

## 🛠️ Estrutura de Teste

Abaixo, o modelo de código para testar diferentes distribuições de espaço:

/_ HTML _/

```html
<div class="flex-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

/_ CSS _/

```css
.flex-container {
display: flex;
/_ Experimente os valores abaixo: _/
justify-content: space-between; /_ Itens nas extremidades _/
justify-content: space-around; /_ Espaço igual ao redor _/
justify-content: space-evenly; /_ Espaço igual entre e nas bordas _/

padding: 20px;
background: var(--input-base);
border-radius: 8px;
}

.item {
padding: 10px 20px;
background: var(--brand-light);
color: var(--text-heading);
border-radius: 4px;
}
```

---

## 💡 Dicas de Performance

- **Gap vs Margin**: Prefira `gap` em containers flex. Ele evita problemas de "margem sobrando" no último elemento da lista.
- **Flex-shrink**: Por padrão, itens flex tentam não quebrar linha. Use `flex-shrink: 0` em ícones ou botões para evitar que eles sejam "esmagados" quando o texto ao lado for muito grande.

---

## 👨‍💻 Autor

Desenvolvido por **Victor Martins Dias**.

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/VictorMartinsD)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/VictorMartinsD)
