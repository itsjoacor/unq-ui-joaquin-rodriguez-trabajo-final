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
						className={`flex items-center justify-center ${
							size === 4
								? "h-24 w-24"
								: size === 6
								? "h-20 w-20"
								: "h-16 w-16"
						} rounded cursor-pointer ${
							square.matched ? "bg-green-500" : "bg-blue-500"
						}`}
						onClick={() => handleSquareClick(index)}
					>
						{selected.includes(index) || square.matched ? (
							<span className="text-white text-xl font-bold">
								{square.value}
							</span>
						) : (
							<div className="text-white font-bold">?</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}

export default GridMemo;
