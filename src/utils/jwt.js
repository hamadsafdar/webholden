import jwt from 'jsonwebtoken';

function generateToken(userId) {
	const payload = {
		user: {
			_id: userId
		}
	};
	const secret = process.env.JWT_SECRET;
	return jwt.sign(payload, secret, {
		expiresIn: '2w',
		issuer: 'node-api'
	});
}

export default { generateToken };
export { generateToken };
