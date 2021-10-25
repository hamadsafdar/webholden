import actionTypes from './actionTypes';
import { utilsActions } from '../../../redux';
import config from '../../../config';

//action creaters
function login(creds) {
	return async (dispatch) => {
		dispatch(utilsActions.request());
		try {
			const result = await fetch(config.baseUrl + '/authenticate', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(creds)
			});
			const { status } = result;
			if ((status >= 200 && status < 300) || status === 304) {
				const { user, token } = await result.json();
				localStorage.setItem('token', token);
				dispatch({ type: actionTypes.LOGIN, payload: { user } });
				dispatch(utilsActions.success());
			} else {
				status === 401 && alert('Invalid Credentials! Please try again.');
				dispatch(
					utilsActions.failure(
						new Error('An Unexpected Response Returned!')
					)
				);
			}
		} catch (error) {
			dispatch(utilsActions.failure(new Error('Server Unreachable!')));
		}
	};
}

function logout() {
	localStorage.clear();
	return { type: actionTypes.LOGOUT };
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	login,
	logout
};
