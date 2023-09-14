import { model, Schema } from 'mongoose'

export const BidsSchema = new Schema({
		userId: {
			type: Schema.ObjectId,
			required: true,
			ref: 'User',
		},
		carId: {
			type: Schema.ObjectId,
			required: true,
			ref: 'Car',
		},
		amount: {
			type: Number,
			required: true,
		}
	},
	{
		timestamps: true
	}
)

export const BidsModel = model('Bids', BidsSchema);