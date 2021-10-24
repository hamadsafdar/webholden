import { Schema, model } from 'mongoose';

const wikiSchema = new Schema(
	{
		phrase: { type: String, required: true },
		title: { type: String, required: true },
		pageId: { type: Number, required: true },
		searchedBy: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true
		},
		details: { type: String, default: '**Not Found**' }
	},
	{
		timestamps: true
	}
);

const wikiModel = model('Wiki', wikiSchema);

export default wikiModel;
