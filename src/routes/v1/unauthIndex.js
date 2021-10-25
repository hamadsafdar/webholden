import express from 'express';
import userRouter from './unauthenticated/userRoutes.js';

const unAuthV2Router = express.Router();
unAuthV2Router.post('/', (req, res) => {
	res.status(200).send({ success: true, message: 'hello' });
});

unAuthV2Router.use('/', userRouter);

export default unAuthV2Router;
