import WikiModel from '../models/wikiRecords.js';

/* Implement authenticated routes to store,
 * get (all and by id), and update, and delete
 * wikipedia posts you will get calling wikipedia api
 * */

export default {
	async insertWikiRecord(record, searchedBy, phrase) {
		try {
			const pageId = Object.keys(record.query.pages)[0];
			const { extract: details, title } = record.query.pages[pageId];

			const wiki = new WikiModel({
				title,
				pageId,
				searchedBy,
				details,
				phrase
			});
			return await wiki.save();
		} catch (error) {
			throw error;
		}
	},

	async getAllWikiRecords(userId) {
		try {
			const records = await WikiModel.find({ searchedBy: userId });
			return records;
		} catch (error) {
			throw error;
		}
	},

	async getWikiRecordById(recordId) {
		try {
			const record = await WikiModel.findById(recordId);
			return record;
		} catch (error) {
			throw error;
		}
	},

	async updateWikiRecords() {
		// Your logic here
	},

	async deleteWikiRecord(recordId) {
		try {
			await WikiModel.findByIdAndDelete(recordId);
		} catch (error) {
			throw error;
		}
	}
};
