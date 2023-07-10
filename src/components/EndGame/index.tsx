import React from "react";
import { EndGameProps } from "../../interfaces/EndGame";
import { EMOJI } from "../../constants/emoji";

const EndGame: React.FC<EndGameProps> = ({ winner, onRestart }) => {
	return (
		<div>
			<h2 className="end-game___game-over">Game Over {EMOJI.GAMEOVER}</h2>
			<h5>
				<span className="end-game___winner-text">Winner:</span> {winner}{" "}
				{winner === "AI" ? EMOJI.AI : EMOJI.PLAYER}
			</h5>
			<button onClick={onRestart}>Restart</button>
		</div>
	);
};

export default EndGame;
