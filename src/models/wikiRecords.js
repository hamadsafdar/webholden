import mongoose from 'mongoose';

const wikiSchema = new mongoose.Schema(
	{
		phrase: { type: String, required: true },
		title: { type: String, required: true },
		pageId: { type: Number, required: true },
		searchedBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true
		},
		details: { type: String, default: '**Not Found**' }
	},
	{
		timestamps: true
	}
);

const wikiModel = mongoose.model('Wiki', wikiSchema);

export default wikiModel;
