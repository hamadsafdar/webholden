import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { utilsReducer, utilsActions } from './utils';
import { wikiActions, wikiReducer } from './wiki';

const rootReducer = combineReducers({
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
	}
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
export { wikiActions, utilsActions };
