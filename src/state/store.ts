import { createStore } from 'redux';
import { appReducer } from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(appReducer, composeWithDevTools());
