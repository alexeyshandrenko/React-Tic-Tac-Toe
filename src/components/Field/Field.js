import FieldLayout from './FieldLayout';

const Field = ({
	currentPlayer,
	setCurrentPlayer,
	setIsGameEnded,
	setIsDraw,
	field,
	setField,
}) => {
	const doStep = (index) => {
		const newField = [...field];
		if (currentPlayer === 'x') {
			newField[index] = 'x';
			setCurrentPlayer('o');
		} else {
			newField[index] = 'o';
			setCurrentPlayer('x');
		}
		setField(newField);
	};

	return <FieldLayout field={field} doStep={doStep} />;
};

export default Field;
