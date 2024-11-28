import React from "react";

function ThemeSelector({ selectedTheme, setSelectedTheme }) {
	return (
		<div className="mt-4">
			<h2 className="text-2xl font-semibold mb-4 text-center">Theme Selector</h2>
			<div className="flex space-x-6 justify-center">

				<button
					onClick={() => setSelectedTheme("Opcion 1")}
					className={`px-6 py-3 text-lg font-bold rounded ${
						selectedTheme === "Opcion 1"
							? "bg-blue-500 text-white"
							: "bg-gray-700 text-gray-300 hover:bg-gray-600"
					}`}
				>
					Opcion 1
				</button>


				<button
					onClick={() => setSelectedTheme("Opcion 2")}
					className={`px-6 py-3 text-lg font-bold rounded ${
						selectedTheme === "Opcion 2"
							? "bg-blue-500 text-white"
							: "bg-gray-700 text-gray-300 hover:bg-gray-600"
					}`}
				>
					Opcion 2
				</button>
			</div>
		</div>
	);
}

export default ThemeSelector;
