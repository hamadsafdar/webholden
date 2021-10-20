//initial state

const initialState = {
	isLoggedIn: false,
	name: ''
};

//action types
const types = Object.freeze({
	LOGIN: 'LOGIN_USER',
	LOGOUT: 'LOGOUT_USER'
});

//action creaters
function login(creds) {}

function logout() {}

const userActions = {
	login,
	logout
};

//reducer

function userReducer(state = initialState, action) {
	switch (action.type) {
		case types.LOGIN:
			return state;
		default:
			return state;
	}
}

export { userActions, userReducer };
