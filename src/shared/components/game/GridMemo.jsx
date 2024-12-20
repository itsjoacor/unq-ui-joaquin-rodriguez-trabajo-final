import React, { useState, useEffect } from "react";

function GridMemo({ size, grid, selected, handleSquareClick }) {
  const [squareSize, setSquareSize] = useState("");

  useEffect(() => {
    const updateSquareSize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth < 640) {
        setSquareSize(size === 8 ? "h-10 w-10" : size === 6 ? "h-14 w-14" : "h-16 w-16");
      } else if (windowWidth < 1024) {
        setSquareSize(size === 8 ? "h-14 w-14" : size === 6 ? "h-16 w-16" : "h-20 w-20");
      } else {
        setSquareSize(size === 8 ? "h-16 w-16" : size === 6 ? "h-20 w-20" : "h-24 w-24");
      }
    };

    updateSquareSize();
    window.addEventListener("resize", updateSquareSize);

    return () => window.removeEventListener("resize", updateSquareSize);
  }, [size]);

  return (
    <div className="flex items-center justify-center mt-4">
      <div
        className={`grid gap-2 sm:gap-3 md:gap-4 ${
          size === 4
            ? "grid-cols-4"
            : size === 6
            ? "grid-cols-6"
            : "grid-cols-8"
        }`}
      >
        {grid.map((square, index) => (
          <div
            key={square.id}
            className={`relative ${squareSize} cursor-pointer perspective`}
            onClick={() => handleSquareClick(index)}
          >
            <div
              className={`absolute inset-0 transform transition-transform duration-500 transform-preserve-3d ${
                selected.includes(index) || square.matched ? "rotate-y-180" : ""
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white text-6xl font-bold rounded-xl shadow-lg backface-hidden" />

              <div
                className={`absolute inset-0 flex items-center justify-center rounded-lg transform rotate-y-180 backface-hidden text-8xl ${
                  square.matched
                    ? "bg-gradient-to-r from-green-500 to-emerald-300"
                    : "bg-gradient-to-r from-orange-500 to-yellow-400"
                }`}
              >
                <span className="text-3xl font-bold text-white">
                  {square.value}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GridMemo;
