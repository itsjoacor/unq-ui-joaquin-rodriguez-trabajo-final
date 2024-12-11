import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GridMemo from "../../shared/components/game/GridMemo";
import GameTitle from "../../shared/components/game/GameTitle";
import PlayerSelector from "../../shared/components/game/PlayerSelector";
import flags from "../../constants/flags";

function Game() {
  const navigate = useNavigate();
  const location = useLocation();

  const { size, theme, multiplayer } = location.state || {
    size: 4,
    theme: "Numbers",
    multiplayer: false,
  };

  const [grid, setGrid] = useState([]);
  const [selected, setSelected] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [scores, setScores] = useState({ player1: 0, player2: 0 });

  useEffect(() => {
    if (!theme || !size) {
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
    } else if (theme === "Flags") {
      if (flags.length < totalPairs) {
        console.error("Not enough flags available for the selected grid size");
        return;
      }
      themeItems = flags.slice(0, totalPairs);
    } else {
      return;
    }

    const shuffledGrid = [...themeItems, ...themeItems]
      .sort(() => Math.random() - 0.5)
      .map((value, index) => ({
        id: index,
        value,
        matched: false,
        player: null,
      }));

    setGrid(shuffledGrid);
    setSelected([]);
    setMatchedPairs([]);
    setScores({ player1: 0, player2: 0 });
    setCurrentPlayer(1);
    setGameStarted(true);
  };

  const handleSquareClick = (index) => {
    if (!gameStarted || loading) return;
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
      setTimeout(() => {
        setGrid((prevGrid) =>
          prevGrid.map((square, index) =>
            index === first || index === second
              ? { ...square, matched: true, player: currentPlayer }
              : square
          )
        );
        setMatchedPairs((prev) => [...prev, first, second]);

        if (multiplayer) {
          setScores((prevScores) => ({
            ...prevScores,
            [`player${currentPlayer}`]:
              prevScores[`player${currentPlayer}`] + 1,
          }));
        }
      }, 450);
    } else if (multiplayer) {
      setTimeout(() => setCurrentPlayer((prev) => (prev === 1 ? 2 : 1)), 1000);
    }

    setTimeout(() => setSelected([]), 1000);
  };

  const handleEndGame = () => {
    navigate("/");
  };

  const handleRestartGame = () => {
    setLoading(true);
    setTimeout(() => {
      initializeGame();
      setLoading(false);
    }, 600);
  };

  const isGameComplete = gameStarted && matchedPairs.length === grid.length;

  const winner =
    scores.player1 > scores.player2
      ? "Player 1 Wins!"
      : scores.player1 < scores.player2
      ? "Player 2 Wins!"
      : "It's a Tie!";

  return (
    <div className="h-screen w-screen bg-black flex flex-col items-center justify-center text-white">
      {loading ? (
        <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
          Restarting...
        </div>
      ) : (
        <>
          <GameTitle
            isGameComplete={isGameComplete}
            multiplayer={multiplayer}
            winner={winner}
            currentPlayer={currentPlayer}
          />

          {multiplayer && (
            <PlayerSelector
              currentPlayer={currentPlayer}
              scores={scores}
            />
          )}

          <GridMemo
            size={size}
            grid={grid}
            selected={selected}
            handleSquareClick={handleSquareClick}
          />

          <div className="flex space-x-4 mt-4">
            {isGameComplete && (
              <button
                onClick={handleRestartGame}
                className="px-6 py-3 font-bold bg-gradient-to-r from-cyan-400 to-indigo-500 text-white text-lg rounded hover:bg-blue-600"
              >
                Restart
              </button>
            )}
            <button
              onClick={handleEndGame}
              className="px-6 py-3 font-bold bg-gradient-to-r from-red-500 to-red-700 text-white text-lg rounded hover:bg-red-600"
            >
              End Game
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Game;
