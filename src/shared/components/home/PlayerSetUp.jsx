import React from "react";

function PlayersSetUp({ multiplayer, setMultiplayer }) {
	return (
		<div className="mt-6">
			<h2 className="text-4xl font-semibold mb-2 text-center bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
				Player Mode
			</h2>
			<div className="mt-1 flex space-x-4 justify-center">
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
		</div>
	);
}

export default PlayersSetUp;
