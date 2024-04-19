import { gameReducer } from './reducers/GameReducer';
import { RESTART_GAME_ACTION } from './actions/actions';

const createStore = (reducer) => {
	let state;
	let listeners = [];

	return {
		dispatch: (action) => {
			state = reducer(state, action);
			listeners.forEach((listener) => listener());
		},
		getState: () => state,
		subscribe: (listener) => {
			listeners.push(listener);
			return () => {
				listeners = listeners.filter((l) => l !== listener);
			};
		},
	};
};

export const store = createStore(gameReducer);
store.dispatch({ type: RESTART_GAME_ACTION });
