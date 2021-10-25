const initialState = {
	isLoading: false,
	error: {}
};

const actionTypes = Object.freeze({
	REQUEST: 'REQUEST',
	SUCCESS: 'SUCCESS',
	FAILURE: 'FAILURE'
});

const utilsActions = {
	request: () => ({ type: actionTypes.REQUEST }),
	success: () => ({ type: actionTypes.SUCCESS }),
	failure: (err) => ({ type: actionTypes.FAILURE, payload: { err } })
};

function utilsReducer(state = initialState, action) {
	switch (action?.type) {
		case actionTypes.REQUEST:
			return { ...state, isLoading: true };
		case actionTypes.SUCCESS:
			return { ...state, isLoading: false };
		case actionTypes.FAILURE:
			return { loading: false, error: { ...action.payload.err } };
		default:
			return state;
	}
}

export { utilsActions, utilsReducer };
