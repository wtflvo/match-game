import { Container } from "@mui/material";
import React from "react";
import { ScoreProps } from "../../interfaces/Score";
import { EMOJI } from "../../constants/emoji";

const Score: React.FC<ScoreProps> = ({ count, aiMatches, playerMatches }) => {
	return (
		<div>
			<h5>
				{EMOJI.FLAG}Matches left: {count}
				{EMOJI.FLAG}
			</h5>
			<Container sx={{ display: "flex", gap: "10px" }}>
				<Container sx={{ border: "2px blue solid" }}>
					<h1>{EMOJI.PLAYER}</h1>
					<h5>Your Matches:</h5> <h5>{playerMatches}</h5>
				</Container>
				<Container sx={{ border: "2px red solid" }}>
					<h1>{EMOJI.AI}</h1>
					<h5>AI Matches:</h5> <h5>{aiMatches}</h5>
				</Container>
			</Container>
		</div>
	);
};

export default Score;
