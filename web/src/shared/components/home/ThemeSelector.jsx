import React from "react";

function ThemeSelector({ selectedTheme, setSelectedTheme }) {
	return (
		<div className="mt-4">
			<h2 className="text-2xl font-semibold mb-4 text-center">
				Theme Selector
			</h2>
			<div className="flex space-x-4 justify-center">
				<button
					onClick={() => setSelectedTheme("Numbers")}
					className={`px-6 py-3 text-lg font-bold rounded ${
						selectedTheme === "Numbers"
							? "bg-blue-500 text-white"
							: "bg-gray-700 text-gray-300 hover:bg-gray-600"
					}`}
				>
					Numbers
				</button>
				<button
					onClick={() => setSelectedTheme("Letters")}
					className={`px-6 py-3 text-lg font-bold rounded ${
						selectedTheme === "Letters"
							? "bg-blue-500 text-white"
							: "bg-gray-700 text-gray-300 hover:bg-gray-600"
					}`}
				>
					Letters
				</button>
			</div>
		</div>
	);
}

export default ThemeSelector;
