import { useState } from "react";

import Header from "../Header";
import Footer from "../Footer";
import SearchBar from "../SearchBar";
import SearchResults from "../SearchResults";

function Library() {

  const [artist, setArtist] = useState("Coldplay");

  return (
    <>
      <Header />

      <main>
        <SearchBar onSearch={setArtist} />

        <SearchResults artist={artist} />
      </main>

      <Footer />
    </>
  );
}

export default Library;