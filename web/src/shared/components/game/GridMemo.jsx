import React from "react";

function GridMemo({ size, grid, selected, handleSquareClick }) {
  return (
    <div className="flex items-center justify-center px-4 sm:px-8">
      <div
        className={`grid ${
          size === 4
            ? "grid-cols-4 gap-x-4 gap-y-6 sm:gap-x-6 sm:gap-y-8"
            : size === 6
            ? "grid-cols-6 gap-x-3 gap-y-4 sm:gap-x-4 sm:gap-y-6"
            : "grid-cols-8 gap-x-2 gap-y-3 sm:gap-x-3 sm:gap-y-4"
        } w-full max-w-screen-sm`}
      >
        {grid.map((square, index) => (
          <div
            key={square.id}
            className={`relative ${
              size === 4
                ? "h-20 w-20 sm:h-24 sm:w-24"
                : size === 6
                ? "h-16 w-16 sm:h-20 sm:w-20"
                : "h-12 w-12 sm:h-16 sm:w-16"
            } cursor-pointer perspective`}
            onClick={() => handleSquareClick(index)}
          >
            <div
              className={`absolute inset-0 transform transition-transform duration-500 transform-preserve-3d ${
                selected.includes(index) || square.matched
                  ? "rotate-y-180"
                  : ""
              }`}
            >

              <div className="absolute inset-0 flex items-center justify-center bg-blue-500 text-white text-xl font-bold rounded backface-hidden">
                ?
              </div>

              <div
                className={`absolute inset-0 flex items-center justify-center ${
                  square.matched ? "bg-green-500" : "bg-yellow-500"
                } text-white text-xl font-bold rounded transform rotate-y-180 backface-hidden`}
              >
                {square.value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GridMemo;
