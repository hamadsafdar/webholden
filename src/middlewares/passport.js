import { Strategy, ExtractJwt } from 'passport-jwt';
import User from '../models/user.js';

export default function (passport) {
	const opts = {};
	opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
	opts.secretOrKey = process.env.JWT_SECRET;

	passport.use(
		new Strategy(opts, async function (_payload, done) {
			let uid;
			if (_payload.user) {
				uid = _payload.user._id;
			}

			try {
				const user = await User.findOne({ _id: uid });
				if (!user) {
					return done(null, false);
				}
				return done(null, user);
			} catch (err) {
				return done(err, false);
			}
		})
	);
}
