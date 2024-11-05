// src/Characters.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        setCharacters(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching characters:", error);
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="section">
      <h1>Rick and Morty Characters</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar Personaje...                              🔍"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input" // Añadir clase para aplicar estilos
        />
      </div>
      <div className="characters-grid">
        {filteredCharacters.map((character) => (
          <div key={character.id} className="character-card">
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
          </div>
        ))}
        {filteredCharacters.length === 0 && <p>No characters found.</p>}
      </div>
    </div>
  );
};

export default Characters;
