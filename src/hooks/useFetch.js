import { useState, useEffect, useCallback } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    if (!url) return;

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(url, {
        cache: "no-store",
      });

      console.log("STATUS:", response.status);
      console.log("URL:", url);

      if (!response.ok) {
        throw new Error(
          `Error ${response.status}: ${response.statusText}`
        );
      }

      const result = await response.json();

      console.log("DATA:", result);

      setData(result);
    } catch (err) {
      console.error("ERROR FETCH:", err);

      setError(
        err.message || "Error desconocido al obtener los datos"
      );
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
}

export default useFetch;