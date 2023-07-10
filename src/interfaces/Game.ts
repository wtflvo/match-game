export interface GameProps {
	matchQuantity: number;
	maxChoice: number;
	isPlayerFirst: boolean;
	onWin: (win: string) => void;
}