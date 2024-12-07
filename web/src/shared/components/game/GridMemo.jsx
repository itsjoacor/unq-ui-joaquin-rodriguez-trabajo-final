import React from "react";

function GridMemo({ size, grid, selected, handleSquareClick }) {
	return (
		<div className="flex items-center justify-center">
			<div
				className={`grid gap-4 ${
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
						className={`relative ${
							size === 4 ? "h-24 w-24" : size === 6 ? "h-20 w-20" : "h-16 w-16"
						} cursor-pointer perspective`}
						onClick={() => handleSquareClick(index)}
					>
						<div
							className={`absolute inset-0 transform transition-transform duration-500 transform-preserve-3d ${
								selected.includes(index) || square.matched ? "rotate-y-180" : ""
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
