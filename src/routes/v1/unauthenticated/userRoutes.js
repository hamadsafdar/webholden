import express from 'express';
import userController from '../../../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/register', async (req, res) => {
	try {
		const result = await userController.registerUser(
			req.user._id,
			req.body
		);
		return res.status(200).send({ success: true, user: result });
	} catch (err) {
		return res.status(400).send({
			success: false,
			err: err.message || errMessages.errors.GENERIC_ERROR
		});
	}
});

userRouter.post('/authenticate', async (req, res) => {
	try {
		const result = await userController.login(req.body);
		console.log(result);
		if (result) {
			if (result.authenticated) {
				return res.status(200).json(result);
			} else {
				return res.status(401).json({
					message: 'INVALID_CREDS'
				});
			}
		} else {
			return res.status(401).json({
				message: 'INVALID_CREDS'
			});
		}
	} catch (error) {
		console.log(error);

		return res.status(500).json({
			message: 'INTERNAL_ERROR'
		});
	}
});

export default userRouter;
