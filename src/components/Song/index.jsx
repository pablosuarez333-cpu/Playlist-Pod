import React from "react";
import "./styles.css";

function Song({ song, showButton, addToLibrary }) {
  return (
    <div className="song-card">
      <img src={song.image} alt={song.title} />

      <h3>{song.title}</h3>

      <p>{song.artist}</p>

      <span>{song.duration}</span>

      {showButton && (
        <button onClick={() => addToLibrary(song)}>
          Guardar
        </button>
      )}
    </div>
  );
}

export default Song;