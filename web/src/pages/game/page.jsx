import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GridMemo from "../../shared/components/game/GridMemo";

function Game() {
  const navigate = useNavigate();
  const location = useLocation();

  const { size, theme } = location.state || { size: 4, theme: "Numbers" };

  const [grid, setGrid] = useState([]);
  const [selected, setSelected] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (!theme || !size) {
      console.error("Invalid theme or size. Redirecting to home.");
      navigate("/");
    } else {
      initializeGame();
    }
  }, [theme, size]);

  const initializeGame = () => {
    const totalPairs = (size * size) / 2;

    let themeItems = [];
    if (theme === "Numbers") {
      themeItems = Array.from({ length: totalPairs }, (_, i) => i + 1);
    } else if (theme === "Letters") {
      themeItems = Array.from({ length: totalPairs }, (_, i) =>
        String.fromCharCode(65 + i)
      );
    } else {
      console.error("Invalid theme selected");
      return;
    }

    const shuffledGrid = [...themeItems, ...themeItems]
      .sort(() => Math.random() - 0.5)
      .map((value, index) => ({
        id: index,
        value,
        matched: false,
      }));

    setGrid(shuffledGrid);
    setSelected([]);
    setMatchedPairs([]);
    setGameStarted(true);
  };

  const handleSquareClick = (index) => {
    if (!gameStarted) return;
    if (
      selected.length === 2 ||
      grid[index].matched ||
      selected.includes(index)
    )
      return;

    const newSelected = [...selected, index];
    setSelected(newSelected);

    if (newSelected.length === 2) {
      checkForMatch(newSelected);
    }
  };

  const checkForMatch = ([first, second]) => {
    if (grid[first].value === grid[second].value) {
      setGrid((prevGrid) =>
        prevGrid.map((square, index) =>
          index === first || index === second
            ? { ...square, matched: true }
            : square
        )
      );
      setMatchedPairs((prev) => [...prev, first, second]);
    }

    setTimeout(() => setSelected([]), 1000);
  };

  const handleEndGame = () => {
    navigate("/");
  };

  const handleRestartGame = () => {
    initializeGame();
  };

  const isGameComplete = gameStarted && matchedPairs.length === grid.length;

  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center text-white">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-6">
          {isGameComplete ? "You Win!" : "Game Play"}
        </h1>

        <div className="mt-4">
          <GridMemo
            size={size}
            grid={grid}
            selected={selected}
            handleSquareClick={handleSquareClick}
          />
        </div>

        <div className="mt-6 flex space-x-4">
          {isGameComplete && (
            <button
              onClick={handleRestartGame}
              className="px-6 py-3 bg-blue-500 text-white text-lg rounded hover:bg-blue-600"
            >
              Restart
            </button>
          )}

          <button
            onClick={handleEndGame}
            className="px-6 py-3 bg-red-500 text-white text-lg rounded hover:bg-red-600"
          >
            End Game
          </button>
        </div>
      </div>
    </div>
  );
}

export default Game;
