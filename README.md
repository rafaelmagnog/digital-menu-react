# 🍽️ Digital Menu React

[![Status](https://img.shields.io/badge/status-Concluído-brightgreen)](README.md)
[![Idioma: PT-BR](https://img.shields.io/badge/Idioma-Português-green)](README.md)
[![Idioma: EN](https://img.shields.io/badge/Idioma-Inglês-red)](README.en.md)
[![Linguagem](https://img.shields.io/badge/Stack-React%2019%20|%20Vite%207%20|%20JavaScript-lightblue)](README.md)

Aplicação web desenvolvida como parte do **Intensivo de JavaScript** da [Hashtag Dev](https://www.hashtagtreinamentos.com/).
O projeto apresenta um **cardápio digital interativo e responsivo**, permitindo ao usuário navegar entre categorias de **Pratos Principais, Sobremesas e Bebidas**, com cards de produtos contendo imagem, descrição e preço.

---

## 🧠 Objetivo

O principal objetivo foi **praticar fundamentos modernos do React e do ecossistema front-end**, explorando **componentização**, **gerenciamento de estado com hooks** e **renderização condicional**.
Além disso, o projeto buscou consolidar boas práticas de **estruturação, responsividade e semântica**, simulando um cardápio digital real para restaurantes.

Durante o desenvolvimento, foram aplicados conceitos como:

* Criação e composição de **componentes funcionais**;
* Manipulação de estado local com `useState`;
* **Renderização dinâmica** de listas e condicionais JSX;
* Separação de **dados e componentes**;
* Estilização com **CSS responsivo**;
* Integração de imagens e dados importados localmente.

---

## 🛠️ Tecnologias Utilizadas

* ⚛️ **React 19** — Biblioteca principal para construção da interface
* ⚡ **Vite 7** — Ferramenta de build e servidor de desenvolvimento
* 💅 **CSS3** — Estilização responsiva e modular
* 🧩 **JavaScript (ES6+)** — Lógica de interação e JSX

---

## 📁 Estrutura de Pastas

```bash
📂 restaurant
├── 📄 index.html
├── ⚙️ vite.config.js
├── ⚙️ eslint.config.js
├── 📦 package.json
└── 📁 src
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── 📁 components
    │   ├── Banner.jsx
    │   ├── Categorias.jsx
    │   ├── Cards.jsx
    │   └── Card.jsx
    ├── 📁 assets
    │   ├── hashtaurante.webp
    │   ├── 📁 pratos
    │   ├── 📁 sobremesas
    │   ├── 📁 bebidas
    │   └── cardapio.js
```

---

## 💻 Principais Funcionalidades

* 🍝 **Troca de categoria dinâmica** — O usuário alterna entre *Pratos Principais*, *Sobremesas* e *Bebidas* com destaque visual.
* 🖼️ **Cards interativos** — Cada item exibe nome, imagem, preço e descrição curta.
* 📱 **Layout responsivo** — Estrutura fluida com breakpoints a 900px e 640px, adaptando-se a celulares e tablets.
* 🎨 **Banner visual (hashtaurante.webp)** — Apresentação inicial com efeito visual suave.
* 🔄 **Renderização condicional** — Exibição automática dos itens conforme a categoria selecionada.

---

## 🧩 Estrutura dos Componentes

| Componente         | Função                                                                                      |
| ------------------ | ------------------------------------------------------------------------------------------- |
| **App.jsx**        | Componente raiz, controla o estado da categoria selecionada e renderiza o layout principal. |
| **Banner.jsx**     | Exibe o banner superior do restaurante com imagem e estilo CSS.                             |
| **Categorias.jsx** | Renderiza os botões de categoria e atualiza o estado via `setNumCategoriaSelecionada`.      |
| **Cards.jsx**      | Recebe o estado da categoria e mapeia os itens correspondentes do `cardapio.js`.            |
| **Card.jsx**       | Renderiza cada item do cardápio (imagem, nome, preço e descrição).                          |

---

## 🎨 Layout e Responsividade

O design foi planejado para refletir uma experiência **intuitiva e moderna**, com:

* Grid adaptável (2 colunas → 1 coluna abaixo de 900px);
* Tipografia legível e espaçamentos equilibrados;
* Sombras e contrastes sutis para destaque visual;

---

## 🚀 Como Executar o Projeto

### 🔧 Pré-requisitos

* **Node.js** (versão 18 ou superior)
* **npm** (instalado junto com o Node)

### ▶️ Passos para executar

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/rafaelmagnog/digital-menu-react.git
   ```

2. **Acesse o diretório do projeto:**

   ```bash
   cd digital-menu-react/restaurant
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

5. **Abra o projeto no navegador:**

   ```
   http://localhost:5173
   ```

> 💡 O Vite fornece recarregamento instantâneo (HMR), ideal para desenvolvimento rápido e iterativo.

---

## 🧰 Scripts Disponíveis

| Comando           | Descrição                                |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento     |
| `npm run build`   | Gera o build de produção (pasta `dist/`) |
| `npm run preview` | Pré-visualiza o build localmente         |

---

## 🔮 Possíveis Melhorias Futuras

* 🔗 Integrar com **API externa** ou backend real (ex.: JSON server ou CMS).
* 🔍 Implementar **busca e filtros** por nome ou preço.
* 🌙 Criar **modo escuro** e preferências de tema.
* 🌎 Internacionalização (i18n) — suporte a múltiplos idiomas.
* ✅ Testes automatizados com **Jest** e **React Testing Library**.

---

## 📺 Referência

Projeto desenvolvido como parte do **Intensivo de JavaScript da Hashtag Dev**, focado em práticas modernas de React e front-end.
