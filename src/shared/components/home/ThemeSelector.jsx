import React from "react";

function ThemeSelector({ selectedTheme, setSelectedTheme }) {
	return (
		<div className="mt-2 pb-1 pt-6">
			<h2 className="text-4xl font-semibold mb-4 text-center text-red-500">
				Theme Selector
			</h2>
			<div className="flex space-x-4 justify-center">
				<button
					onClick={() => setSelectedTheme("Numbers")}
					className={`px-6 py-3 text-lg font-bold rounded ${
						selectedTheme === "Numbers"
							? "bg-gradient-to-r from-indigo-500 to-blue-500 text-white"
							: "bg-gradient-to-r from-gray-700 to-gray-500 text-gray-300 hover:from-gray-600 hover:to-gray-500"
					}`}
				>
					Numbers
				</button>
				<button
					onClick={() => setSelectedTheme("Letters")}
					className={`px-6 py-3 text-lg font-bold rounded ${
						selectedTheme === "Letters"
							? "bg-gradient-to-r from-indigo-500 to-blue-500 text-white"
							: "bg-gradient-to-r from-gray-700 to-gray-500 text-gray-300 hover:from-gray-600 hover:to-gray-500"
					}`}
				>
					Letters
				</button>
			</div>
		</div>
	);
}

export default ThemeSelector;
