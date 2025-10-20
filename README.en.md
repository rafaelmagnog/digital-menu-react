# 🍽️ Digital Menu React

[![Status](https://img.shields.io/badge/status-Completed-brightgreen)](README.md)
[![Language: PT-BR](https://img.shields.io/badge/Language-Portuguese-green)](README.md)
[![Language: EN](https://img.shields.io/badge/Language-English-red)](README.en.md)
[![Stack](https://img.shields.io/badge/Stack-React%2019%20|%20Vite%207%20|%20JavaScript-lightblue)](README.md)

A web application developed as part of the **JavaScript Intensive** by [Hashtag Dev](https://www.hashtagtreinamentos.com/).
This project features an **interactive and responsive digital menu**, allowing users to navigate through categories of **Main Dishes, Desserts, and Drinks**, with product cards displaying images, descriptions, and prices.

---

## 🧠 Purpose

The main goal of this project was to **practice modern React and front-end ecosystem fundamentals**, focusing on **componentization**, **state management with hooks**, and **conditional rendering**.
It also aimed to reinforce good practices in **structure, responsiveness, and semantics**, simulating a real digital restaurant menu.

Throughout development, the following concepts were applied:

* Creation and composition of **functional components**;
* Local state management using `useState`;
* **Dynamic rendering** of lists and JSX conditionals;
* Separation of **data and components**;
* Styling with **responsive CSS**;
* Integration of locally imported images and data.

---

## 🛠️ Technologies Used

* ⚛️ **React 19** — Main library for building the user interface
* ⚡ **Vite 7** — Build tool and development server
* 💅 **CSS3** — Responsive and modular styling
* 🧩 **JavaScript (ES6+)** — Logic, interactivity, and JSX

---

## 📁 Folder Structure

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

## 💻 Main Features

* 🍝 **Dynamic category switching** — Users can toggle between *Main Dishes*, *Desserts*, and *Drinks* with visual feedback.
* 🖼️ **Interactive cards** — Each item displays its name, image, price, and a short description.
* 📱 **Responsive layout** — Flexible structure with breakpoints at 900px and 640px, adapting to tablets and mobile devices.
* 🎨 **Visual banner (hashtaurante.webp)** — Intro section with a smooth visual effect.
* 🔄 **Conditional rendering** — Automatic display of menu items based on the selected category.

---

## 🧩 Component Structure

| Component          | Description                                                                           |
| ------------------ | ------------------------------------------------------------------------------------- |
| **App.jsx**        | Root component controlling the selected category state and rendering the main layout. |
| **Banner.jsx**     | Displays the restaurant’s top banner with image and CSS styling.                      |
| **Categorias.jsx** | Renders category buttons and updates state via `setNumCategoriaSelecionada`.          |
| **Cards.jsx**      | Receives the selected category and maps corresponding items from `cardapio.js`.       |
| **Card.jsx**       | Renders each menu item (image, name, price, and description).                         |

---

## 🎨 Layout and Responsiveness

The design was created to provide an **intuitive and modern experience**, featuring:

* Adaptive grid (2 columns → 1 column below 900px);
* Readable typography and balanced spacing;
* Subtle shadows and contrast for visual emphasis.

---

## 🚀 How to Run the Project

### 🔧 Prerequisites

* **Node.js** (version 18 or higher)
* **npm** (comes with Node)

### ▶️ Steps to Run

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rafaelmagnog/digital-menu-react.git
   ```

2. **Enter the project directory:**

   ```bash
   cd digital-menu-react/restaurant
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

5. **Open the project in your browser:**

   ```
   http://localhost:5173
   ```

> 💡 Vite provides instant reload (HMR), ideal for fast and iterative development.

---

## 🧰 Available Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Starts the development server            |
| `npm run build`   | Generates the production build (`dist/`) |
| `npm run preview` | Previews the production build locally    |

---

## 🔮 Possible Future Improvements

* 🔗 Integrate with an **external API** or real backend (e.g., JSON server or CMS).
* 🔍 Implement **search and filters** by name or price.
* 🌙 Add **dark mode** and theme preferences.
* 🌎 **Internationalization (i18n)** — support for multiple languages.
* ✅ Add **automated tests** with Jest and React Testing Library.

---

## 📺 Reference

Project developed as part of the **JavaScript Intensive by Hashtag Dev**, focusing on modern React and front-end development practices.
