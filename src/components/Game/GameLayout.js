import Field from '../Field';
import InformationLayout from '../Information';
import Button from '../../core/ui/Button';

const GameLayout = ({
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
	isDraw,
	setIsDraw,
	field,
	setField,
	restartGame,
}) => {
	return (
		<>
			<InformationLayout
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
			/>
			<Field
				setCurrentPlayer={setCurrentPlayer}
				setIsGameEnded={setIsGameEnded}
				setIsDraw={setIsDraw}
				field={field}
				setField={setField}
			/>
			{isGameEnded && <Button onClick={restartGame}>Начать заново</Button>}
		</>
	);
};

export default GameLayout;
