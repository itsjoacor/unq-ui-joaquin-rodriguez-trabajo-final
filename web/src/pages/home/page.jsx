import React, { useState } from "react";
import BoardSize from "../../shared/components/home/BoardSize";
import { useNavigate } from "react-router-dom";

function GamePlaySetUp() {
	const [selectedSize, setSelectedSize] = useState(4);
	const [selectedTheme, setSelectedTheme] = useState("Numbers"); // Default theme
	const navigate = useNavigate();

	const handleStart = () => {
		navigate("/game", { state: { size: selectedSize, theme: selectedTheme } });
	};

	return (
		<div className="flex items-center justify-center h-screen w-screen text-white">
			<div className="bg-black rounded-lg shadow-lg p-10 w-[90%] max-w-md flex flex-col items-center justify-center">
				<h1 className="text-4xl font-bold mb-6 text-center">Memo Test</h1>


				<BoardSize
					selectedSize={selectedSize}
					setSelectedSize={setSelectedSize}
				/>


				<div className="mt-4 flex space-x-4">
					<button
						onClick={() => setSelectedTheme("Opcion 1")}
						className={`px-4 py-2 text-lg font-bold rounded ${
							selectedTheme === "Numbers"
								? "bg-blue-500 text-white"
								: "bg-gray-700 text-gray-300 hover:bg-gray-600"
						}`}
					>
						Opcion 1
					</button>
					<button
						onClick={() => setSelectedTheme("Opcion 2")}
						className={`px-4 py-2 text-lg font-bold rounded ${
							selectedTheme === "Animals"
								? "bg-blue-500 text-white"
								: "bg-gray-700 text-gray-300 hover:bg-gray-600"
						}`}
					>
						Opcion 2
					</button>
				</div>

				{/* Start Button */}
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
