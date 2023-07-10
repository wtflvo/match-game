export interface ModeSelectionProps {
	onStartGame: (
		quantity: number,
		choice: number,
		isPlayerFirst: boolean
	) => void;
}