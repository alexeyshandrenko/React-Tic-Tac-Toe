import { useState } from 'react';
import GameLayout from './GameLayout';
import { WINNING_STRATEGIES } from '../../core/constants/winning';
import { defineDraw, defineVictory } from '../../core/constants/utils';
import { loadFull } from 'tsparticles';

const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('x');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	const particleInit = async (engine) => {
		await loadFull(engine);
	};

	const restartGame = () => {
		setCurrentPlayer('x');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(['', '', '', '', '', '', '', '', '']);
	};

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

	return (
		<GameLayout
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			field={field}
			restartGame={restartGame}
			particleInit={particleInit}
			doStep={doStep}
		/>
	);
};

export default Game;
