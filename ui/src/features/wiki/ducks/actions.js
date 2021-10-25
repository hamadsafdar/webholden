import { utilsActions } from '../../../redux';
import actionTypes from './actionTypes';
import config from '../../../config';

const url = config.baseUrl + '/api/v1/wiki';

function fetchHistory() {
	return async (dispatch) => {
		dispatch(utilsActions.request());
		try {
			const token = localStorage.getItem('token');
			const result = await fetch(url + '/all', {
				headers: {
					Authorization: 'Bearer ' + token
				}
			});
			if (isSuccessStatus(result)) {
				const { records } = await result.json();
				dispatch({
					type: actionTypes.FETCH_HISTORY,
					payload: { history: records }
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
			const token = localStorage.getItem('token');
			const result = await fetch(url + '/' + id, {
				method: 'DELETE',
				headers: {
					Authorization: 'Bearer ' + token
				}
			});
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
			const token = localStorage.getItem('token');
			const result = await fetch(url + '/' + id, {
				headers: {
					Authorization: 'Bearer ' + token
				}
			});
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
			const result = await fetch(url + '/search/' + phrase, {
				headers: {
					Authorization: 'Bearer ' + token
				}
			});
			if (isSuccessStatus(result)) {
				//
				const { record: article } = await result.json();
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
