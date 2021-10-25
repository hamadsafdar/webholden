import express from 'express';
import axios from 'axios';

import wikiController from '../../../controllers/wikiController.js';

const router = express.Router();

const wikiAPIUrl =
	'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&explaintext=1&exintro=1&titles=';

router.get('/search/:phrase', async (req, res) => {
	try {
		const phrase = req.params.phrase;
		const url = wikiAPIUrl + phrase;

		const result = await axios.get(url, {
			headers: {
				Accept: 'application/json',
				'Content-Type': '*/*'
			}
		});
		if (result.status === 200) {
			const record = await wikiController.insertWikiRecord(
				result.data,
				req.user._id,
				phrase
			);
			return res.json({
				success: true,
				record
			});
		} else {
			return res.sendStatus(503);
		}
	} catch (error) {
		res.status(500).json({
			message: 'INTERNAL_ERROR'
		});
	}
});

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

router.get('/:recordId', async (req, res) => {
	try {
		const recordId = req.params.recordId;
		const record = await wikiController.getWikiRecordById(recordId);
		return res.json({
			record
		});
	} catch (error) {
		res.status(500).json({
			message: 'INTERNAL_ERROR'
		});
	}
});

router.delete('/:recordId', async (req, res) => {
	try {
		const recordId = req.params.recordId;
		await wikiController.deleteWikiRecord(recordId);
		res.sendStatus(200);
	} catch (error) {
		res.status(500).json({
			message: 'INTERNAL_ERROR'
		});
	}
});

export default router;
