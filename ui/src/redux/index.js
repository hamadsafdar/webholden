import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { utilsReducer, utilsActions } from './utils';
import { wikiActions, wikiReducer } from './wiki';
import { userReducer } from '../features/user';

const rootReducer = combineReducers({
	wiki: wikiReducer,
	utils: utilsReducer,
	user: userReducer
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
		isLoggedIn: false,
		name: ''
	}
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
export { wikiActions, utilsActions };
