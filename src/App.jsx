import { Routes, Route } from "react-router-dom";

import GlobalStyles from "./theme/GlobalStyles";

import Library from "./components/Library";
import SongDetail from "./pages/SongDetail";

function App() {
  return (
    <>
      <GlobalStyles />

      <Routes>
        <Route
          path="/"
          element={<Library />}
        />

        <Route
          path="/song/:id"
          element={<SongDetail />}
        />
      </Routes>
    </>
  );
}

export default App;