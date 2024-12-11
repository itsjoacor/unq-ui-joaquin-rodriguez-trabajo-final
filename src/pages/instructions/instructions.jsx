import { useNavigate } from "react-router-dom";

function Instructions() {
	const navigate = useNavigate();

	const handleGoHome = () => {
		navigate("/");
	};
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
			<h1 className="text-4xl font-bold mb-4">Instructions!</h1>
			<p className="text-lg mb-4">Welcome to Memo Test! Here's how to play:</p>
			<ul className="list-disc text-left space-y-2">
				<li>Choose the grid size to determine the difficulty level.</li>
				<li>Select a theme: Numbers or Flags.</li>
				<li>Select how you want to play, single or multiplayer.</li>
				<li>If you chose single player, you play until you win, just for fun!</li>
				<li>If you chose multiplayer, you compete against another player, locally.</li>
				<li>The first player turns squares until missing a pair.</li>
				<li>Match all possible pairs to win the game!</li>
				<li>There's no time or move limits</li>
			</ul>
			<button
				onClick={handleGoHome}
				className="mt-6 px-6 py-3 bg-gradient-to-r from-red-500 to-red-400 text-white text-lg font-bold rounded hover:from-blue-400 hover:to-blue-300"
			>
				Go Back
			</button>
		</div>
	);
}

export default Instructions;
