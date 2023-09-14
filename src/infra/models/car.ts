import { model, Schema } from 'mongoose'

export const CarSchema = new Schema({
	brand: {
		type: String,
		required: true,
	},
	model: {
		type: String,
		required: true,
	},
	year: {
		type: Number,
		required: true,
	},
	startingPrice: {
		type: Number,
		required: true,
	},
	isAuctionClosed: {
		type: Boolean,
		required: false,
	},
	winnerUserId: {
		type: Schema.ObjectId,
		required: false,
		ref: 'User',
	},
},
{
	timestamps: true,
})

export const CarModel = model('Car', CarSchema);