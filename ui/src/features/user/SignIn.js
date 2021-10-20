import { Button, Input } from '../../components';
import useSignIn from './hooks/useSignIn';

import './styles.signin.css';

export default function SignIn() {
	const { creds, onChangeHandler, onSignInHandler } = useSignIn();

	return (
		<div className="signin-container">
			<div>
				<h1>Wiki Search</h1>
			</div>
			<Input
				name="email"
				label="Email"
				placeholder="john@example.com"
				value={creds.email}
				onChange={onChangeHandler}
			/>
			<Input
				value={creds.password}
				name="password"
				label="Password"
				placeholder="Password"
				onChange={onChangeHandler}
				secure
			/>
			<Button label="Sign In" onClick={onSignInHandler} />
		</div>
	);
}
