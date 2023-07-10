export interface AIProps {
	onTakeMatches: (count: number, switcher: string) => void;
	matches: number;
	maxChoice: number;
}