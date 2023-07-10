export interface PlayerProps {
	onTakeMatches: (count: number, switcher: string) => void;
	matches: number;
	maxChoice: number;
}
