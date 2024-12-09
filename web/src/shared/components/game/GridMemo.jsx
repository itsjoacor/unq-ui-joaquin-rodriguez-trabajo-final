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
							<div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-5xl font-bold rounded-xl shadow-lg backface-hidden">
								?
							</div>

							<div
								className={`absolute inset-0 flex items-center justify-center ${
									square.matched ? "bg-green-500" : "bg-rose-600"
								} border-4 border-transparent bg-gradient-to-r text-black text-2xl font-bold rounded-lg transform rotate-y-180 backface-hidden`}
							>
								<div className="bg-white rounded-lg flex items-center justify-center w-3/4 h-3/4">
									<span className="text-3xl font-bold">{square.value}</span>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default GridMemo;
