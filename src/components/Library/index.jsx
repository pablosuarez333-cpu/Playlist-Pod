import React from "react";

import "./styles.css";

function Library({ songs, isOpen }) {

  return (
    <aside className={`library-sidebar ${isOpen ? "open" : ""}`}>

      <h2>Mi Biblioteca</h2>

      {
        songs.length === 0 ? (
          <p>No hay canciones guardadas.</p>
        ) : (
          songs.map((song) => (

            <div className="library-song" key={song.id}>

              <img
                src={song.image}
                alt={song.title}
              />

              <div>
                <h4>{song.title}</h4>
                <p>{song.artist}</p>
              </div>

            </div>
          ))
        )
      }

    </aside>
  );
}

export default Library;