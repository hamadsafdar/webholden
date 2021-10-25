import express from 'express';

import wikiController from '../../../controllers/wikiController.js';

const router = express.Router();

router.get('/search/:phrase', async (req, res) => {});

router.get('/all', async (req, res) => {
	try {
		const records = await wikiController.getAllWikiRecords(req.user._id);
		return res.status(200).json({
			records
		});
	} catch (error) {
		res.status(500).json({
			message: 'INTERNAL_ERROR'
		});
	}
});

router.delete('/:recordId', async (req, res) => {
	try {
	} catch (error) {}
});

export default router;
