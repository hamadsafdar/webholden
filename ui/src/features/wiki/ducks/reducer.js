import actionTypes from './actionTypes';

const initialState = {
	history: [],
	searchedArticle: {}
};

function wikiReducer(state = initialState, action) {
	switch (action?.type) {
		case actionTypes.FETCH_HISTORY:
			return { ...state, history: action.payload.history };
		case actionTypes.DELETE: {
			return {
				...state,
				history: state.history.filter(
					(record) => record._id !== action.payload.id
				)
			};
		}
		case actionTypes.FETCH_RECORD:
			//not implemented yet
			return state;
		case actionTypes.FETCH_ARTICLE:
			return {
				...state,
				searchedArticle: action.payload.article
			};
		default:
			return state;
	}
}

export { wikiReducer };
