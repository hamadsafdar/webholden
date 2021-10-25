import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { userActions } from '../ducks';

export default function useSignIn() {
	const [creds, setCreds] = useState({ username: '', password: '' });
	const history = useHistory();

	const { isLoggedIn } = useSelector((state) => state.user);
	const dispatch = useDispatch();

	useEffect(() => {
		isLoggedIn && history.push('/wiki');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoggedIn]);

	const onChangeHandler = (event) => {
		const { name, value } = event.target;
		setCreds((prev) => ({
			...prev,
			[name]: value
		}));
	};

	const onSignInHandler = useCallback(() => {
		dispatch(userActions.login(creds));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [creds]);

	return { isLoggedIn, onSignInHandler, onChangeHandler, creds };
}
