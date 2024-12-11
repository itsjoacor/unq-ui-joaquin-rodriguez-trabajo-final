import React from "react";

function GameTitle({ isGameComplete, multiplayer, winner, currentPlayer }) {
  return (
    <h1 className="text-5xl font-bold text-center">
      {isGameComplete ? (
        <>
          <span className="font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            Game Over:
          </span>
          <br />
          <span>{multiplayer ? winner : "You Win!"}</span>
        </>
      ) : multiplayer ? (
        <>
          <span className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-400 bg-clip-text text-transparent">
            Player {currentPlayer}
          </span>
        </>
      ) : (
        <>
          <span>Game Play</span>
        </>
      )}
    </h1>
  );
}

export default GameTitle;
