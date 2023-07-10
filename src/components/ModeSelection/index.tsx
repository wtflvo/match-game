import {
	Container,
	FormControl,
	FormGroup,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from "@mui/material";
import React, { useState } from "react";
import { ModeSelectionProps } from "../../interfaces/ModeSelection";
import { EMOJI } from "../../constants/emoji";
import { DEFAULT_MATCH_QUANTITY, DEFAULT_MAX_COUNT } from "../../constants/game-parameters";



const ModeSelection: React.FC<ModeSelectionProps> = ({ onStartGame }) => {
	const [matchQuantity, setMatchQuantity] = useState(DEFAULT_MATCH_QUANTITY);
	const [maxChoice, setMaxChoice] = useState(DEFAULT_MAX_COUNT);
	const [isPlayerFirst, setFirstPlayer] = useState(true);
	const [matchQuantityError, setMatchQuantityError] = useState(false);
	const [maxChoiceError, setMaxChoiceError] = useState(false);
	const handleMatchQuantityChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const value = Number(e.target.value);
		if (value % 2 === 1 && value > 4) {
			setMatchQuantityError(false);
		} else if (value < maxChoice) {
			setMaxChoiceError(true);
		} else {
			setMatchQuantityError(true);
		}
		setMatchQuantity(value);
	};
	const handleMaxChoiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = Number(e.target.value);
		if (value < 1 || value > matchQuantity) {
			setMaxChoiceError(true);
		} else {
			setMaxChoiceError(false);
		}
		setMaxChoice(value);
	};

	const handleStartGame = () => {
		onStartGame(matchQuantity, maxChoice, isPlayerFirst);
	};

	return (
		<Container className="mode-selection___container">
			<h2>Select Game Mode</h2>
			<FormGroup sx={{ gap: "20px" }}>
				<TextField
					type="number"
					label="Matches in pile (Odd numbers only)"
					value={matchQuantity}
					onChange={handleMatchQuantityChange}
					fullWidth
					error={matchQuantityError}
					helperText={
						matchQuantityError
							? "Please enter an odd number from 5 and above"
							: ""
					}
				/>
				<TextField
					type="number"
					label="Maximum matches per turn"
					value={maxChoice}
					onChange={handleMaxChoiceChange}
					fullWidth
					error={maxChoiceError}
					helperText={
						maxChoiceError
							? "Enter number, more than 0 and less, than Matches in pile"
							: ""
					}
				/>
				<FormControl fullWidth>
					<InputLabel id="player-label">First Turn</InputLabel>
					<Select
						labelId="player-label"
						id="player-select"
						value={isPlayerFirst.toString()}
						onChange={(e) => setFirstPlayer(e.target.value === "true")}
						label="First Player"
					>
						<MenuItem value="true">Player{EMOJI.PLAYER}</MenuItem>
						<MenuItem value="false">AI {EMOJI.AI}</MenuItem>
					</Select>
				</FormControl>
			</FormGroup>
			<Container>
				<button
					onClick={handleStartGame}
					disabled={matchQuantityError || maxChoiceError}
				>
					Start Game
				</button>
			</Container>
		</Container>
	);
};

export default ModeSelection;
