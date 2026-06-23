import "./styles.scss";

import { useState } from "react";

function SearchBar({ onSearch }) {

  const [artist, setArtist] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!artist.trim()) return;

    onSearch(artist);
  };

  return (

    <div className="mb-4" >

      <form
        className="search-bar"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          placeholder="Buscar artista..."
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />

        <button type="submit">
          Buscar
        </button>

      </form>

    </div>

  );
}

export default SearchBar;