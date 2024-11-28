import { BrowserRouter, Route, Routes } from "react-router-dom"
import GamePlaySetUp from "./pages/home/page"
import Game from "./pages/game/page"


function App() {
	return (
	  <BrowserRouter>
		<Routes>
		  <Route path="/" element={<GamePlaySetUp />} />
		  <Route path="/game" element={<Game />} />
		</Routes>
	  </BrowserRouter>
	);
  }
  
  export default App;
