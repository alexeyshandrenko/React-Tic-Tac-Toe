import FieldLayout from './FieldLayout';
import { WINNING_STRATEGIES } from '../../core/constants/winning';
import { defineDraw, defineVictory } from '../../core/constants/utils';

const Field = ({
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
	isDraw,
	setIsDraw,
	field,
	setField,
}) => {
	const doStep = (index) => {
		if (!field[index] && !isGameEnded && !isDraw) {
			const newField = [...field];
			newField[index] = currentPlayer;
			const isWin = defineVictory(newField, currentPlayer, WINNING_STRATEGIES);
			const isDraw = defineDraw(newField);
			if (isWin) {
				setIsGameEnded(true);
			} else if (isDraw) {
				setIsGameEnded(true);
				setIsDraw(true);
			} else {
				setCurrentPlayer(currentPlayer === 'x' ? '0' : 'x');
			}
			setField(newField);
		}
	};

	return <FieldLayout field={field} doStep={doStep} />;
};

export default Field;
