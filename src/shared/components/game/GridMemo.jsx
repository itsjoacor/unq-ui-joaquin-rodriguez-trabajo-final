import React from "react";

function GridMemo({ size, grid, selected, handleSquareClick }) {
	return (
		<div className="flex items-center justify-center p-4">
			<div
				className={`grid gap-2 ${
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
							size === 4
								? "h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24"
								: size === 6
								? "h-14 w-14 sm:h-18 sm:w-18 md:h-20 md:w-20"
								: "h-12 w-12 sm:h-16 sm:w-16 md:h-18 md:w-18"
						} cursor-pointer perspective`}
						onClick={() => handleSquareClick(index)}
					>
						<div
							className={`absolute inset-0 transform transition-transform duration-500 transform-preserve-3d ${
								selected.includes(index) || square.matched ? "rotate-y-180" : ""
							}`}
						>
							<div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-3xl sm:text-4xl md:text-5xl font-bold rounded-xl shadow-lg backface-hidden">
								?
							</div>
							<div
								className={`absolute inset-0 flex items-center justify-center ${
									square.matched ? "bg-green-500" : "bg-yellow-400"
								} border-4 border-transparent text-black text-xl sm:text-2xl md:text-3xl font-bold rounded-lg transform rotate-y-180 backface-hidden`}
							>
								<div className="bg-white rounded-lg flex items-center justify-center w-3/4 h-3/4">
									<span className="text-2xl sm:text-3xl md:text-4xl font-bold">
										{square.value}
									</span>
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
