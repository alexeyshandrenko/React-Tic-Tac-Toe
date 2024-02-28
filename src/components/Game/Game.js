import { useState } from 'react';
import GameLayout from './GameLayout';

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

	return (
		<GameLayout
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
			isGameEnded={isGameEnded}
			setIsGameEnded={setIsGameEnded}
			isDraw={isDraw}
			setIsDraw={setIsDraw}
			field={field}
			setField={setField}
			restartGame={restartGame}
			particleInit={particleInit}
		/>
	);
};

export default Game;
