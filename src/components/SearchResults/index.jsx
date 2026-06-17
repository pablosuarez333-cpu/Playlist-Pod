import useFetch from "../../hooks/useFetch";
import Songs from "../Songs";

function SearchResults({ artist }) {
  const url = artist
    ? `/audiodb/api/v1/json/2/searchalbum.php?s=${encodeURIComponent(
        artist
      )}`
    : null;

  const {
    data,
    loading,
    error,
    refetch,
  } = useFetch(url);

  if (!artist) {
    return (
      <p>
        Busca un artista para comenzar.
      </p>
    );
  }

  if (loading) {
    return <h2>Cargando...</h2>;
  }

  if (error) {
    return (
      <div>
        <p>
          Hubo un problema al cargar los datos.
        </p>

        <p>{error}</p>

        <button onClick={refetch}>
          Reintentar
        </button>
      </div>
    );
  }

  if (!data || !data.album) {
    return (
      <p>
        No se encontraron resultados.
      </p>
    );
  }

  return <Songs songs={data.album} />;
}

export default SearchResults;