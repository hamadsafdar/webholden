import User from '../models/user';

async function checkPassword(username, password) {
	try {
		const user = await User.findOne({ username, password });
		return user ? true : false;
	} catch (error) {
		throw error;
	}
}

async function getUser(username) {
	try {
		const user = await User.findOne({ username });
		return user;
	} catch (error) {
		throw error;
	}
}

export default { checkPassword, getUser };
export { checkPassword, getUser };
