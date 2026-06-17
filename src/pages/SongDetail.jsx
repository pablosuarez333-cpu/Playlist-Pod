import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function SongDetail() {

  const { id } = useParams();

  const url =
    `/audiodb/api/v1/json/2/album.php?m=${id}`;

  const {
    data,
    loading,
    error
  } = useFetch(url);

  if (loading) {
    return <h2>Cargando...</h2>;
  }

  if (error) {
    return (
      <p>
        Hubo un problema al cargar el álbum.
      </p>
    );
  }

  if (!data?.album?.length) {
    return (
      <p>
        No se encontró información.
      </p>
    );
  }

  const album = data.album[0];

  return (
    <section className="song-detail">

      <Link to="/">
        ← Volver
      </Link>

      <h2>{album.strAlbum}</h2>

      <img
        src={album.strAlbumThumb}
        alt={album.strAlbum}
      />

      <p>
        <strong>Artista:</strong>{" "}
        {album.strArtist}
      </p>

      <p>
        <strong>Año:</strong>{" "}
        {album.intYearReleased}
      </p>

      <p>
        <strong>Género:</strong>{" "}
        {album.strGenre}
      </p>

      <p>
        <strong>Estilo:</strong>{" "}
        {album.strStyle}
      </p>

      <p>
        {album.strDescriptionEN}
      </p>

    </section>
  );
}

export default SongDetail;