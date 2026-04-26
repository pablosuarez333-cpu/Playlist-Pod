import React from 'react';

function Song({ title, artist, duration }) {
  return (
    <div className="song">
      <h3>{title}</h3>
      <p>{artist}</p>
      <span>{duration}</span>
      <button>Guardar</button>
    </div>
  );
}

export default Song;