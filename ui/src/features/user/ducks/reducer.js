import actionTypes from './actionTypes';

const initialState = {
	isLoggedIn: false
};

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.LOGIN:
			return {
				...state,
				isLoggedIn: true,
				...action.payload
			};
		case actionTypes.LOGOUT:
			return {
				isLoggedIn: false
			};
		default:
			return state;
	}
}
