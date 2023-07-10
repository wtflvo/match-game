import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AIProps } from "../../interfaces/AI";
import { EMOJI } from "../../constants/emoji";
import { AI_DELAY, MIN_EVEN_COUNT, MIN_MATCHES } from "../../constants/game-parameters";

const AI: React.FC<AIProps> = ({ onTakeMatches, matches, maxChoice }) => {
	const [count, setCount] = useState<number>(0);

	useEffect(() => {
		if (matches > 0) {
			if (matches === MIN_MATCHES) {
				setCount(1);
			} else if (matches <= maxChoice) {
				setCount(Math.floor(matches / 2) * 2);
			} else if (matches > maxChoice * 2) {
				const evenNumbers = [];
				for (let i = MIN_EVEN_COUNT; i <= maxChoice; i += 2) {
					evenNumbers.push(i);
				}
				setCount(evenNumbers[Math.floor(Math.random() * evenNumbers.length)]);
			} else {
				setCount(MIN_EVEN_COUNT);
			}
		}
	}, []);
	useEffect(() => {
		const delay = setTimeout(() => {
			onTakeMatches(count, "AI");
		}, AI_DELAY);

		return () => clearTimeout(delay);
	}, [count]);
	const waitEmojis = Array.from({ length: 3 }, () => EMOJI.TIME);
	return (
		<Container>
			<span>
				<h5>AI is taking {count} matches</h5>
			</span>
			<span className="ai___robot-emojis">
				{waitEmojis.map((emoji, index) => (
					<span
						key={index}
						className="ai___emoji-fade-in"
						style={{ animationDelay: `${(index + 1) * 0.5}s` }}
					>
						{emoji}
					</span>
				))}
			</span>
		</Container>
	);
};

export default AI;
