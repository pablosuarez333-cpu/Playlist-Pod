import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import Library from "./components/Library";

import songsData from "./components/songs/data";

import "./App.css";

function App() {

  const [searchTerm, setSearchTerm] = useState("");

  const [library, setLibrary] = useState([]);

  const [isLibraryOpen, setIsLibraryOpen] = useState(false);

  const filteredSongs = songsData.filter((song) =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToLibrary = (song) => {

    const exists = library.some(
      (item) => item.id === song.id
    );

    if (!exists) {
      setLibrary([...library, song]);
    }
  };

  useEffect(() => {
    console.log("Biblioteca actualizada:", library);
  }, [library]);

  return (
    <div className="app-container">

      <Header appName="!Pod Classic" />

      <button
        className="library-toggle"
        onClick={() => setIsLibraryOpen(!isLibraryOpen)}
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        Biblioteca ({library.length})

      </button>

      <SearchResults
        songs={filteredSongs}
        addToLibrary={addToLibrary}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <Library
        songs={library}
        isOpen={isLibraryOpen}
      />
    </div>
  );
}

export default App;