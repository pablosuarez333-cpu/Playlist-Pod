import { Routes, Route } from "react-router-dom";

import Library from "./components/Library";
import SongDetail from "./pages/SongDetail";

function App() {
  return (
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
  );
}

export default App;