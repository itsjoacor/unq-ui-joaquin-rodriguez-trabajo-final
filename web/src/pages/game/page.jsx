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
    initializeGame(); // Reinitialize the game
  };

  const isGameComplete = gameStarted && matchedPairs.length === grid.length;

  // Dynamic container size calculation
  const squareSize = size === 4 ? 100 : size === 6 ? 80 : 60; // Adjust square size
  const gridGap = 16; // Gap between squares
  const gridSize = size * squareSize + (size - 1) * gridGap;
  const containerSize = gridSize + 80;

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-black text-white">
      <div
        className="flex flex-col items-center justify-center rounded-lg shadow-lg"
        style={{
          width: `${containerSize}px`,
          height: `${containerSize}px`,
          backgroundColor: "#000", // Black background
          padding: "20px",
        }}
      >
        <h1 className="text-4xl font-bold mb-6 text-center">
          {isGameComplete ? "You Win!" : "Game Play"}
        </h1>

        {/* Centered Grid */}
        <div className="flex items-center justify-center">
          <GridMemo
            size={size}
            grid={grid}
            selected={selected}
            handleSquareClick={handleSquareClick}
          />
        </div>
      </div>

      {/* Buttons Section */}
      <div className="mt-6 flex space-x-4">
        {isGameComplete ? (
          <button
            onClick={handleRestartGame}
            className="px-6 py-3 bg-blue-500 text-white text-lg rounded hover:bg-blue-600"
          >
            Restart
          </button>
        ) : null}

        <button
          onClick={handleEndGame}
          className="px-6 py-3 bg-red-500 text-white text-lg rounded hover:bg-red-600"
        >
          End Game
        </button>
      </div>
    </div>
  );
}

export default Game;
