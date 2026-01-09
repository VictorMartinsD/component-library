# 🧪 UI Lab & Component Library

Este repositório é uma biblioteca pessoal de **estudo ativo** e consulta técnica. O objetivo é documentar padrões de layout e componentes de interface, servindo como uma base de conhecimento para desenvolvimento front-end.

## 🔗 Link

[![Visualizar Projeto](https://img.shields.io/badge/Acessar%20Deploy-Github%20Pages-blue?style=for-the-badge)](https://victormartinsd.github.io/component-library/)

---

## 📂 Estrutura do Repositório

A organização do projeto segue a distinção entre estruturas lógicas e elementos visuais:

### 📐 [Patterns](./patterns)

Focado em **estratégias de layout** e arquitetura CSS. Documentamos aqui o "esqueleto" e a lógica de posicionamento.

- **Foco:** Grids responsivos (`repeat/minmax`), Flexbox Alignment e CSS Flow.

### 🧩 [Components](./components)

Focado em **elementos de interface** isolados e reutilizáveis com estilo, comportamento e acessibilidade.

- **Foco:** Botões customizados, Theme Switches e formulários.

---

## 🚀 Como utilizar

Cada subpasta é um laboratório isolado contendo:

- `index.html`: Demonstração funcional linkada ao `../../reset.css`.
- `style.css`: CSS modular com variáveis enxutas.
- `README.md`: Notas de estudo explicando as decisões técnicas (o "porquê" do código).

---

## ⚠️ Diretrizes de Contribuição Interna

Para manter o repositório profissional e limpo, sigo estas regras:

1. **Clean Commits:** Não realizar commit de arquivos SVG ou assets externos se não houver alteração direta neles.
2. **Reset Global:** Todos os componentes devem herdar o `reset.css` da raiz para garantir consistência.
3. **Variáveis:** Utilizar a paleta base (Dark Mode) para manter a identidade visual do Lab.

---

## 📝 Notas de Aprendizado Recentes

### Theme Switch Toggle

- **Performance:** Uso de `transform: translateX` para garantir animações a 60fps.
- **UI/UX:** Manutenção da borda (`--input-stroke`) em ambos os estados para preservar o contraste e evitar "jitter" visual.

---

## 👨‍💻 Autor

Desenvolvido por **Victor Martins Dias**

[LinkedIn](https://www.linkedin.com/in/VictorMartinsD) • [GitHub](https://github.com/victormartinsd)

---

## ⚖️ Licença

Sob licença MIT.
