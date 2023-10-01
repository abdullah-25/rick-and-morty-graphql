import "./App.css";
import CharactersList from "./pages/CharactersList";
import Character from "./pages/Character";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CharactersList />} />
          <Route path="/search" element={<Search />} />

          <Route path="/:id" element={<Character />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
