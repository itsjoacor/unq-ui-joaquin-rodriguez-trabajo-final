import React, { useState } from "react";
import BoardSize from "../../shared/components/home/BoardSize";
import ThemeSelector from "../../shared/components/home/ThemeSelector";
import { useNavigate } from "react-router-dom";

function GamePlaySetUp() {
  const [selectedSize, setSelectedSize] = useState(4);
  const [selectedTheme, setSelectedTheme] = useState("Numbers");
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/game", { state: { size: selectedSize, theme: selectedTheme } });
  };

  return (
    <div className="flex items-center justify-center min-h-screen min-w-screen bg-black text-white">
      <div className="bg-black rounded-lg shadow-lg p-10 w-[90%] max-w-md flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-6 text-center">Memo Test</h1>

        <BoardSize
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />

        <ThemeSelector
          selectedTheme={selectedTheme}
          setSelectedTheme={setSelectedTheme}
        />

        <button
          onClick={handleStart}
          className="mt-6 px-6 py-3 bg-green-500 text-white text-lg font-bold rounded hover:bg-green-600 w-full"
        >
          Start
        </button>
      </div>
    </div>
  );
}

export default GamePlaySetUp;
