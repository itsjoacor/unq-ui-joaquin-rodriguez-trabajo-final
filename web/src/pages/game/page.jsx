import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Game() {
  const navigate = useNavigate();
  const location = useLocation();
  const { size } = location.state || { size: 4 };
  const gridCells = Array.from({ length: size * size }, (_, index) => index + 1);

  const handleAbort = () => {
    navigate("/");
  };
        //TODO tiene que ser un grid responsive, que pueda ir seleccionandolo 
        //! Averiguar como ir poniendo imagenes segun el tamaño -> preguntar como es que se quiere, segun el tamaño hasta 36/2 imagenes.
        //?Ver como mostrar los elementos antes de shufflearlos
        //*Agregar la logica de ir viendo como se esta llevando a cabo la partida 
        //?Como es que se juega, si con una cantidad de movimientos? SOLO
  return (
    <div className="flex items-center justify-center min-h-screen w-screen text-white">
      <div className="bg-black rounded-lg shadow-lg p-6 w-full max-w-3xl flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8 text-center">Game Play</h1>

        <div
          className="grid gap-4 w-full"
          style={{
            gridTemplateColumns: `repeat(${size}, 1fr)`,
          }}
        >
          {gridCells.map((cell) => (
            <div
              key={cell}
              className="bg-blue-500 text-white font-bold flex items-center justify-center aspect-square rounded"
            >
              {cell}
            </div>
          ))}
        </div>

        <button
          onClick={handleAbort}
          className="mt-8 px-6 py-3 bg-red-500 text-white text-lg rounded hover:bg-red-600"
        >
          End Game
        </button>
      </div>
    </div>
  );
}

export default Game;
