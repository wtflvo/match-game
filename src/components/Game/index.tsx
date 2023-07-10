import React, { useEffect, useState } from "react";
import Score from "../Score";
import Player from "../Player";
import AI from "../AI";
import { Container } from "@mui/material";
import { GameProps } from "../../interfaces/Game";

const Game: React.FC<GameProps> = ({
	matchQuantity,
	maxChoice,
	isPlayerFirst,
	onWin,
}) => {
	const [matches, setMatches] = useState(matchQuantity);
	const [playerTurn, setPlayerTurn] = useState(isPlayerFirst);
	const [playerMatches, setPlayerMatches] = useState(0);
	const [aiMatches, setAiMatches] = useState(0);

	useEffect(() => {
		if (matches <= 0) {
			console.log("winner");
			onWin(aiMatches % 2 === 0 ? "AI" : "Player");
		}
	}, [matches]);

	const handleTakeMatches = (count: number, switcher: string) => {
		setMatches((prevMatches) => prevMatches - count);
		if (switcher === "AI") {
			setAiMatches((prevAiMatches) => prevAiMatches + count);
			setPlayerTurn(true);
		} else {
			setPlayerMatches((prevPlayerMatches) => prevPlayerMatches + count);
			setPlayerTurn(false);
		}
	};

	return (
		<Container>
			<Score
				aiMatches={aiMatches}
				playerMatches={playerMatches}
				count={matches}
			/>
			<Container sx={{ height: "50vh" }}>
				{playerTurn ? (
					<Player
						onTakeMatches={handleTakeMatches}
						maxChoice={maxChoice}
						matches={matches}
					/>
				) : (
					<AI
						onTakeMatches={handleTakeMatches}
						matches={matches}
						maxChoice={maxChoice}
					/>
				)}
			</Container>
		</Container>
	);
};

export default Game;
