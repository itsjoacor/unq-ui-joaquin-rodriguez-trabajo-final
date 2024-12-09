import React from "react";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-6xl font-bold mb-6">Ups! Sorry</h1>
      <p className="text-xl mb-8 text-gray-400">Page Not Found</p>
      <button
        onClick={handleGoHome}
        className="px-8 py-4 text-lg font-bold rounded bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-blue-400 hover:to-blue-300"
      >
        Go Home
      </button>
    </div>
  );
}

export default PageNotFound;
