import "./App.css";

import Categorias from "./components/Categorias.jsx";
import Cards from "./components/Cards.jsx";
import Banner from "./components/Banner.jsx";
import { useState } from "react";

function App() {
  // Hook
  // Variável de estado para armazenar o índice da categoria selecionada
  let [numCategoriaSelecionada, setNumCategoriaSelecionada] = useState(0);

  return (
    <div className="container">
      <Banner />
      <Categorias
        numCategoriaSelecionada={numCategoriaSelecionada}
        setNumCategoriaSelecionada={setNumCategoriaSelecionada}
      />
      <Cards numCategoriaSelecionada={numCategoriaSelecionada} />
    </div>
  );
}

export default App;
