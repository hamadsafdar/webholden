import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { utilsReducer, utilsActions } from './utils';
import { wikiActions, wikiReducer } from './wiki';
import userReducer from '../features/user/ducks/reducer';

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
export { wikiActions, utilsActions };
