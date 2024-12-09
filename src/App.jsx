import { BrowserRouter, Route, Routes } from "react-router-dom";
import GamePlaySetUp from "./pages/home/page";
import Game from "./pages/game/page";
import Instructions from "./pages/instructions/instructions";
import PageNotFound from "./pages/error/pageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GamePlaySetUp />} />
        <Route path="/game" element={<Game />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
