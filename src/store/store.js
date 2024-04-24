import { createStore } from 'redux';
import { gameReducer } from './reducers/GameReducer';

export const store = createStore(gameReducer);
