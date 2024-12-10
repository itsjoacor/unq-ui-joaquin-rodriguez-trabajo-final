import React from "react";

function ThemeSelector({ selectedTheme, setSelectedTheme }) {
	return (
		<div className="mt-6 pb-4 pt-6 flex flex-col items-center justify-center">
			<h2 className="text-4xl font-semibold mb-4 text-center bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
				Theme Selector
			</h2>
			<div className="flex space-x-4">
				<button
					onClick={() => setSelectedTheme("Numbers")}
					className={`w-32 h-12 flex items-center justify-center text-lg font-bold rounded ${
						selectedTheme === "Numbers"
							? "bg-gradient-to-r from-blue-600 to-cyan-400 text-white"
							: "bg-gradient-to-r from-gray-700 to-gray-500 text-white hover:from-gray-600 hover:to-gray-500"
					}`}
				>
					Numbers
				</button>
				<button
					onClick={() => setSelectedTheme("Letters")}
					className={`w-32 h-12 flex items-center justify-center text-lg font-bold rounded ${
						selectedTheme === "Letters"
							? "bg-gradient-to-r from-blue-600 to-cyan-400 text-white"
							: "bg-gradient-to-r from-gray-700 to-gray-500 text-white hover:from-gray-600 hover:to-gray-500"
					}`}
				>
					Letters
				</button>
			</div>
		</div>
	);
}

export default ThemeSelector;
