import React, { useState } from "react";
import BoardSize from "../../shared/components/home/BoardSize";
import ThemeSelector from "../../shared/components/home/ThemeSelector";
import { useNavigate } from "react-router-dom";
import { FiInfo } from "react-icons/fi";

function GamePlaySetUp() {
	const [selectedSize, setSelectedSize] = useState(4);
	const [selectedTheme, setSelectedTheme] = useState("Numbers");
	const navigate = useNavigate();

	const handleStart = () => {
		navigate("/game", { state: { size: selectedSize, theme: selectedTheme } });
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

			<div
				className="bg-black rounded-lg shadow-lg p-6 md:p-10 w-[95%] max-w-md flex flex-col items-center justify-center
      bg-gradient-to-r from-purple-500 to-fuchsia-400 bg-clip-text text-transparent"
			>
				<h1 className="text-5xl md:text-6xl font-bold mb-4 md:mb-6 text-center">
					Memo Test
				</h1>

				<div className="w-full">
					<BoardSize
						selectedSize={selectedSize}
						setSelectedSize={setSelectedSize}
					/>
				</div>

				<div className="w-full mt-4 md:mt-6">
					<ThemeSelector
						selectedTheme={selectedTheme}
						setSelectedTheme={setSelectedTheme}
					/>
				</div>

				<button
					onClick={handleStart}
					className="mt-6 px-4 md:px-6 py-2 md:py-3 text-white text-xl md:text-2xl font-bold rounded w-2/3 md:w-1/3
  bg-gradient-to-r from-emerald-500 to-lime-400 hover:from-green-500 hover:to-green-500"
				>
					Start
				</button>
			</div>
		</div>
	);
}

export default GamePlaySetUp;
