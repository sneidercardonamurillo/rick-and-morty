// src/Episodes.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Episodios.css"; // Asegúrate de que tienes este archivo

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/episode"
        );
        setEpisodes(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching episodes:", error);
        setLoading(false);
      }
    };

    fetchEpisodes();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="section">
      <h1>Rick and Morty Episodes</h1>
      <div className="episodes-grid">
        {episodes.map((episode) => (
          <div key={episode.id} className="episode-card">
            <h2>{episode.name}</h2>
            <p>Episode: {episode.episode}</p>
            <p>Air Date: {episode.air_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Episodes;
