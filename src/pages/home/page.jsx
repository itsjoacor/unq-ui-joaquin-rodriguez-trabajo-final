import React, { useState } from "react";
import BoardSize from "../../shared/components/home/BoardSize";
import ThemeSelector from "../../shared/components/home/ThemeSelector";
import { useNavigate } from "react-router-dom";
import { FiInfo } from "react-icons/fi";

function GamePlaySetUp() {
  const [selectedSize, setSelectedSize] = useState(4);
  const [selectedTheme, setSelectedTheme] = useState("Numbers");
  const [multiplayer, setMultiplayer] = useState(false);
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/game", {
      state: { size: selectedSize, theme: selectedTheme, multiplayer },
    });
  };

  const handleInstructions = () => {
    navigate("/instructions");
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen min-w-screen bg-black text-white">
      <button
        onClick={handleInstructions}
        className="absolute top-4 right-4 text-white text-4xl hover:text-yellow-200"
        title="Instructions"
      >
        <FiInfo />
      </button>

      <div className="bg-black rounded-lg shadow-lg p-10 w-[90%] max-w-md flex flex-col items-center justify-center
      bg-gradient-to-r from-purple-500 to-fuchsia-400 bg-clip-text text-transparent">
        <h1 className="text-6xl font-bold mb-6 text-center pb-6">Memo Test</h1>

        <BoardSize
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />

        <ThemeSelector
          selectedTheme={selectedTheme}
          setSelectedTheme={setSelectedTheme}
        />

        <h2 className="text-2xl font-semibold text-center mt-6">
          Player Quantity
        </h2>
        <div className="mt-4 flex space-x-4">
          <button
            onClick={() => setMultiplayer(false)}
            className={`px-6 py-3 text-white text-lg font-bold rounded ${
              !multiplayer
                ? "bg-gradient-to-r from-blue-600 to-cyan-400 text-white"
                : "bg-gradient-to-r from-gray-700 to-gray-500 text-white hover:from-gray-600 hover:to-gray-500"
            }`}
          >
            Single Player
          </button>
          <button
            onClick={() => setMultiplayer(true)}
            className={`px-6 py-3 text-white text-lg font-bold rounded ${
              multiplayer
                ? "bg-gradient-to-r from-blue-600 to-cyan-400 text-white"
                : "bg-gradient-to-r from-gray-700 to-gray-500 text-white hover:from-gray-600 hover:to-gray-500"
            }`}
          >
            Multiplayer
          </button>
        </div>

        <button
          onClick={handleStart}
          className="mt-6 px-6 py-3 text-white text-2xl font-bold rounded w-1/3
          bg-gradient-to-r from-emerald-500 to-lime-400 hover:from-green-500 hover:to-green-500"
        >
          Start
        </button>
      </div>
    </div>
  );
}

export default GamePlaySetUp;
