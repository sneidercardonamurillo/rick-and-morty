// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Characters from "./components/character/Characters.jsx";
import Episodes from ".//components/episodios/Episodios.jsx";
import Locations from "./components/Locations/Location.jsx"; // Importa el componente Locations
import Home from "./components/Home/Home.jsx";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/characters">Characters</Link>
          <Link to="/episodes">Episodes</Link>
          <Link to="/locations">Locations</Link> {/* Enlace a localizaciones */}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/locations" element={<Locations />} />{" "}
          {/* Ruta para localizaciones */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
