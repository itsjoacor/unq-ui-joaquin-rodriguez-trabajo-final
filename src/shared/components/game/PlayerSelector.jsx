import React from "react";

function PlayerSelector({ currentPlayer, scores }) {
  return (
    <div className="flex justify-around w-full max-w-md my-4">
      <div
        className={`text-lg ${
          currentPlayer === 1
            ? "font-bold bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent"
            : "font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent"
        }`}
      >
        Player 1 <br />
        <div className="text-white">Guessed: {scores.player1}</div>
      </div>
      <div
        className={`text-lg ${
          currentPlayer === 2
            ? "font-bold bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent"
            : "font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent"
        }`}
      >
        Player 2 <br />
        <div className="text-white">Guessed: {scores.player2}</div>
      </div>
    </div>
  );
}

export default PlayerSelector;
