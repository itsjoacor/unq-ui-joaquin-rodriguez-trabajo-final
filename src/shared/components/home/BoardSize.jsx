import React from "react";

function BoardSize({ selectedSize, setSelectedSize }) {
	return (
		<div className="flex flex-col items-center justify-center h-full">
			<h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
				Choose Grid Size
			</h2>
			<div className="flex space-x-6">
				{[4, 6, 8].map((size) => (
					<button
						key={size}
						onClick={() => setSelectedSize(size)}
						className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold ${
							selectedSize === size
								? "bg-gradient-to-r from-blue-600 to-cyan-400 text-white"
								: "bg-gradient-to-r from-gray-800 to-gray-500 text-gray-300 hover:from-gray-600 hover:to-gray-500"
						}`}
					>
						{size}x{size}
					</button>
				))}
			</div>
		</div>
	);
}

export default BoardSize;
