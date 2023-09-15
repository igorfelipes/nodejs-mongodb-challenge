import { model, Schema } from 'mongoose'

export const SessionSchema = new Schema({
	userId: { 
		type: Schema.ObjectId, 
		required: true, 
		ref: 'User' 
	},
	token: { 
		type: String, 
		required: true 
	},
	expires: { 
		type: Date, 
		required: true
	},
	userAgent: { 
		type: String, 
		required: false
	},

}, { timestamps: true });

export const SessionModel = model('Session', SessionSchema);