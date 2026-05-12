import React from "react";

import Song from "../Song";

import "./styles.css";

function SearchResults({
  songs,
  addToLibrary,
  searchTerm,
  setSearchTerm,
}) {

  return (
    <section className="search-results">

      <h2>Resultados de búsqueda</h2>

      <input
        type="text"
        placeholder="Buscar canción o artista..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {
        songs.length === 0 ? (
          <p>No se encontraron canciones.</p>
        ) : (
          songs.map((song) => (
            <Song
              key={song.id}
              song={song}
              showButton={true}
              addToLibrary={addToLibrary}
            />
          ))
        )
      }

    </section>
  );
}

export default SearchResults;