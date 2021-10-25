import { utilsActions } from '../../../redux';
import actionTypes from './actionTypes';
import config from '../../../config';

function fetchHistory() {
	return async (dispatch) => {
		dispatch(utilsActions.request());
		try {
			const result = await fetch('');
			if (isSuccessStatus(result)) {
				const history = await result.json();
				dispatch({
					type: actionTypes.FETCH_HISTORY,
					payload: { history }
				});
				dispatch(utilsActions.success());
			} else {
				dispatch(utilsActions.failure(new Error('Unexpected Error!')));
			}
		} catch (error) {
			dispatch(utilsActions.failure(new Error('Server Unavailable!')));
		}
	};
}

function deleteRecord(id) {
	return async (dispatch) => {
		dispatch(utilsActions.request());
		try {
			const result = await fetch();
			if (isSuccessStatus(result)) {
				//

				dispatch({
					type: actionTypes.DELETE,
					payload: { id }
				});
				dispatch(utilsActions.success());
			} else {
				dispatch(utilsActions.failure(new Error('Unexpected Error!')));
			}
		} catch (error) {
			dispatch(utilsActions.failure(new Error('Server Unavailabe!')));
		}
	};
}

function fetchRecord(id) {
	return async (dispatch) => {
		dispatch(utilsActions.request());
		try {
			const result = await fetch();
			if (isSuccessStatus(result)) {
				//
				const record = await result.json();
				dispatch({
					type: actionTypes.FETCH_RECORD,
					payload: { record }
				});
				dispatch(utilsActions.success());
			} else {
				dispatch(utilsActions.failure(new Error('Unexpected Error!')));
			}
		} catch (error) {
			dispatch(utilsActions.failure(new Error('Server Unavailabe!')));
		}
	};
}

function fetchArticle(phrase) {
	return async (dispatch) => {
		dispatch(utilsActions.request());
		try {
			const token = localStorage.getItem('token');
			const result = await fetch(
				config.baseUrl + '/wiki/search/' + phrase,
				{
					method: 'GET',
					headers: {
						Authorization: 'Bearer ' + token
					}
				}
			);
			if (isSuccessStatus(result)) {
				//
				const article = await result.json();
				dispatch({
					type: actionTypes.FETCH_ARTICLE,
					payload: { article }
				});
				dispatch(utilsActions.success());
			} else {
				dispatch(utilsActions.failure(new Error('Unexpected Error!')));
			}
		} catch (error) {
			dispatch(utilsActions.failure(new Error('Server Unavailabe!')));
		}
	};
}

export { fetchHistory, deleteRecord, fetchRecord, fetchArticle };

const isSuccessStatus = ({ status }) => {
	return (status >= 200 && status <= 299) || status === 304;
};
