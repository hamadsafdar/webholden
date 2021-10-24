const initialState = {
	isLoggedIn: false
};

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case 'LOGIN':
			return state;
		default:
			return state;
	}
}
