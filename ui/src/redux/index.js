import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { utilsReducer, utilsActions } from './utils';

import userReducer from '../features/user/ducks/reducer';
import { wikiReducer } from '../features/wiki';

const rootReducer = combineReducers({
	user: userReducer,
	wiki: wikiReducer,
	utils: utilsReducer
});

const initialState = {
	utils: {
		loading: false,
		error: {}
	},
	wiki: {
		history: [],
		searchedArticle: {}
	},
	user: {
		isLoggedIn: false
	}
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
export { utilsActions };
