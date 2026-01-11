# 🧪 UI Lab & Component Library

Este repositório é uma biblioteca pessoal de **estudo ativo** e consulta técnica. O objetivo é documentar padrões de layout e componentes de interface, servindo como uma base de conhecimento para desenvolvimento front-end.

## 🔗 Link

[![Visualizar Projeto](https://img.shields.io/badge/Acessar%20Deploy-Github%20Pages-blue?style=for-the-badge)](https://victormartinsd.github.io/component-library/)

---

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

### 🎨 Design Tokens: Component Lab

Neste projeto, utilizamos variáveis semânticas para garantir que a interface seja consistente e fácil de manter. Abaixo estão os padrões definidos:

#### 1. Cores (Color Palette)

| Token            | Valor   | Função / Uso                                                                           |
| :--------------- | :------ | :------------------------------------------------------------------------------------- |
| `--brand-light`  | #59b2ff | **Destaque:** Usada em estados ativos, bordas de foco e elementos de marca.            |
| `--input-base`   | #1c1f21 | **Fundo de Elemento:** Cor base para o interior de containers, inputs e cards.         |
| `--input-stroke` | #363b40 | **Borda/Contorno:** Define os limites dos componentes sem criar contraste excessivo.   |
| `--text-heading` | #f9f9f9 | **Título:** Alto contraste para textos principais e leitura rápida.                    |
| `--text-body`    | #869198 | **Corpo:** Contraste moderado para descrições e textos longos, evitando fadiga visual. |
| `--bg-main`      | #131516 | **Fundo da Página:** A base escura de toda a interface.                                |

#### 2. Tipografia (Typography)

| Token              | Valor                   | Função / Uso                                               |
| :----------------- | :---------------------- | :--------------------------------------------------------- |
| `--font-main`      | 'Open Sans', sans-serif | Fonte padrão do sistema para legibilidade e clareza.       |
| `--weight-bold`    | 600                     | Peso utilizado para destacar títulos e labels importantes. |
| `--font-size-base` | 16px                    | Tamanho padrão para textos de leitura.                     |

#### 3. Forma e Espaçamento (Shape & Spacing)

| Token           | Valor | Função / Uso                                               |
| :-------------- | :---- | :--------------------------------------------------------- |
| `--radius-sm`   | 4px   | Cantos levemente arredondados (ex: botões pequenos, tags). |
| `--radius-md`   | 8px   | Raio padrão para cards de código e itens internos.         |
| `--radius-lg`   | 12px  | Raio para containers maiores como o preview-box.           |
| `--radius-pill` | 999px | Formato de pílula usado em switches e botões arredondados. |

---

#### 🛠️ Como aplicar no código

Para que isso funcione como um Design System real, declaramos esses tokens no `:root` do arquivo CSS e referenciamos nos componentes:

```css
:root {
--brand-light: #59b2ff;
--input-base: #1c1f21;
/_ ...restante dos tokens _/
}

.card {
background-color: var(--input-base);
border: 1px solid var(--input-stroke);
border-radius: var(--radius-md);
}
```

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

## 📂 Estrutura do Repositório

A organização do projeto segue a distinção entre estruturas lógicas e elementos visuais.

---

## 👨‍💻 Autor

Desenvolvido por **Victor Martins Dias**

[LinkedIn](https://www.linkedin.com/in/VictorMartinsD) • [GitHub](https://github.com/victormartinsd)

---

## ⚖️ Licença

Sob licença MIT.
