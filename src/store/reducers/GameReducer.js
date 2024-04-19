import {
	CHANGE_PLAYER_ACTION,
	CHANGE_FIELD_ACTION,
	RESTART_GAME_ACTION,
} from '../actions/actions';

export const initialState = {
	currentPlayer: 'x',
	field: ['', '', '', '', '', '', '', '', ''],
};

export const gameReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case CHANGE_PLAYER_ACTION:
			return { ...state, currentPlayer: state.currentPlayer === 'x' ? '0' : 'x' };

		case CHANGE_FIELD_ACTION:
			return { ...state, field: [...payload] };

		case RESTART_GAME_ACTION:
			return {
				...state,
				currentPlayer: 'x',
				field: ['', '', '', '', '', '', '', '', ''],
			};

		default:
			return state;
	}
};
