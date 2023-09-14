import { generatePasswordHash } from '../../app/user/utils'
import { model, Schema } from 'mongoose'

export const UserSchema: Schema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
	},
}, {
	timestamps: true,
})

UserSchema.pre('save', function (next) {
	const user = this as any;

	user.password = generatePasswordHash(user.password);
	
	next();
});

export const UserModel = model('User', UserSchema);