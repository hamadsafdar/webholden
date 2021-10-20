import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
export default {
	async connect() {
		const __dirname = path.resolve();
		console.log(path.resolve(__dirname, '.env'));
		dotenv.config({ path: path.resolve(__dirname, '.env') });
		const dbURI = `${process.env.MONGODB_URI}`;
		console.log('CONNECTION:::', dbURI);
		return mongoose.connect(dbURI, {
			poolSize: 64,
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true
		});
	},

	async closeConnection() {
		await mongoose.connection.close();
	}
};
