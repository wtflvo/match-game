import React, { useState } from "react";

import ModeSelection from "../ModeSelection";
import Game from "../Game";
import EndGame from "../EndGame";
import { Container } from "@mui/material";
import { DEFAULT_MATCH_QUANTITY, DEFAULT_MAX_COUNT } from "../../constants/game-parameters";

const Home = () => {
	const [matchQuantity, setMatchQuantity] = useState(DEFAULT_MATCH_QUANTITY);
	const [maxChoice, setMaxChoice] = useState(DEFAULT_MAX_COUNT);
	const [isPlayerFirst, setFirstPlayer] = useState(true);
	const [gameStarted, setGameStarted] = useState(false);
	const [gameOver, setGameOver] = useState(false);
	const [winner, setWinner] = useState("Player");

	const handleStartGame = (
		quantity: number,
		choice: number,
		isPlayerFirst: boolean
	) => {
		setMatchQuantity(quantity);
		setMaxChoice(choice);
		setFirstPlayer(isPlayerFirst);
		setGameStarted(true);
	};

	const handleEndGame = () => {
		setGameOver(false);
		setGameStarted(true);
	};
	const handleWinner = (win: string) => {
		setWinner(win);
		setGameOver(true);
	};

	return (
		<Container className="home">
			<h1>Match Game</h1>
			{!gameOver ? (
				!gameStarted ? (
					<ModeSelection onStartGame={handleStartGame} />
				) : (
					<div>
						<Game
							matchQuantity={matchQuantity}
							maxChoice={maxChoice}
							isPlayerFirst={isPlayerFirst}
							onWin={handleWinner}
						/>
					</div>
				)
			) : (
				<EndGame winner={winner} onRestart={handleEndGame} />
			)}
		</Container>
	);
};

export default Home;
