import React from "react";

function BoardSize({ selectedSize, setSelectedSize }) {
	return (
		<div className="mb-16">
			<h2 className="text-2xl font-semibold mb-6">Choose Grid Size</h2>
			<div className="flex space-x-6">
				{[4, 5, 6].map((size) => (
					<button
						key={size}
						onClick={() => setSelectedSize(size)}
						className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold ${
							selectedSize === size
								? "bg-blue-500 text-white"
								: "bg-gray-700 text-gray-300 hover:bg-gray-600"
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
