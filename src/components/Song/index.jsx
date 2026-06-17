import { Link } from "react-router-dom";

function Song({ song }) {

  return (
    <article className="song-card">

      <img
        src={song.strAlbumThumb}
        alt={song.strAlbum}
      />

      <h3>{song.strAlbum}</h3>

      <p>{song.strArtist}</p>

      <p>{song.intYearReleased}</p>

      <Link to={`/song/${song.idAlbum}`}>
        Ver detalles
      </Link>

    </article>
  );
}

export default Song;