import Field from '../Field';
import InformationLayout from '../Information';

const GameLayout = ({
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
	isDraw,
	setIsDraw,
	field,
	setField,
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
		</>
	);
};

export default GameLayout;
