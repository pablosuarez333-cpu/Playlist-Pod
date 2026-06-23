import "./styles.scss";

import Song from "../Song";

function Songs({ songs }) {
  return (
    <section className="songs-container">

      {songs.map(song => (
        <Song
          key={song.idAlbum}
          song={song}
        />
      ))}

    </section>
  );
}

export default Songs;