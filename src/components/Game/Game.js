import { useState, useEffect } from 'react';
import GameLayout from './GameLayout';
import { WINNING_STRATEGIES } from '../../core/constants/winning';
import { defineDraw, defineVictory } from '../../core/constants/utils';
import { loadFull } from 'tsparticles';
import { store } from '../../store/store';
import { CHANGE_PLAYER_ACTION, CHANGE_FIELD_ACTION } from '../../store/actions/actions';

const Game = () => {
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);

	const { getState, dispatch, subscribe } = store;
	const [state, setState] = useState(getState());

	useEffect(() => {
		const unsubscribe = subscribe(() => setState(getState()));
		return unsubscribe;
	}, [subscribe]);

	const particleInit = async (engine) => {
		await loadFull(engine);
	};

	const restartGame = () => {
		setIsGameEnded(false);
		setIsDraw(false);
		dispatch({ type: CHANGE_PLAYER_ACTION });
		dispatch({
			type: CHANGE_FIELD_ACTION,
			payload: ['', '', '', '', '', '', '', '', ''],
		});
	};

	const doStep = (index) => {
		if (!state.field[index] && !isGameEnded && !isDraw) {
			const newField = [...state.field];
			newField[index] = state.currentPlayer;
			const isWin = defineVictory(
				newField,
				state.currentPlayer,
				WINNING_STRATEGIES,
			);
			const isDraw = defineDraw(newField);
			if (isWin) {
				setIsGameEnded(true);
			} else if (isDraw) {
				setIsGameEnded(true);
				setIsDraw(true);
			} else {
				dispatch({ type: CHANGE_PLAYER_ACTION });
			}
			dispatch({
				type: CHANGE_FIELD_ACTION,
				payload: newField,
			});
		}
	};

	return (
		<GameLayout
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			restartGame={restartGame}
			particleInit={particleInit}
			doStep={doStep}
		/>
	);
};

export default Game;
