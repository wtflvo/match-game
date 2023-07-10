import {
	Container,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";
import React from "react";
import { PlayerProps } from "../../interfaces/Player";



const Player: React.FC<PlayerProps> = ({
	onTakeMatches,
	matches,
	maxChoice,
}) => {
	const [selectedCount, setSelectedCount] = React.useState(1);
	const choicesLength = Math.min(matches, maxChoice);

	const handleCountChange = (event: SelectChangeEvent<number>) => {
		setSelectedCount(Number(event.target.value));
	};

	const handleTakeMatches = () => {
		onTakeMatches(selectedCount, "player");
	};

	return (
		<Container className="player___container">
			<h5>Your Turn</h5>
			<FormControl fullWidth>
				<InputLabel id="player-label">My choice</InputLabel>
				<Select
					labelId="player-label"
					id="player-select"
					value={selectedCount}
					onChange={handleCountChange}
					label="First Player"
				>
					{Array.from({ length: choicesLength }, (_, i) => i + 1).map(
						(choice) => (
							<MenuItem key={choice} value={choice}>
								{choice}
							</MenuItem>
						)
					)}
				</Select>
			</FormControl>
			<Container>
				<button onClick={handleTakeMatches}>Take Matches</button>
			</Container>
		</Container>
	);
};

export default Player;
