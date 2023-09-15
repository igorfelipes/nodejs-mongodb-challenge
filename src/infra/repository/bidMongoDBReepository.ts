import { LoadAllBidsSearchParams } from '../../app/bids/types'
import { BidRepository } from '../../data/contracts/bidRepository'
import { Bid } from '../../domain/entities/bids'
import { BidsModel, BidsSchema } from '../models/bids'

export class BidMongoDBRepository implements BidRepository {

	adaptToDomain(bid: any): Bid {
		return {
			id: bid._id,
			userId: bid.userId,
			carId: bid.carId,
			amount: bid.amount,
			user: bid.user
		}
	}

	async loadAll(query?: LoadAllBidsSearchParams): Promise<Bid[] | []>{
		let queryFormatted: any = {}

		if(query?.carId) queryFormatted.carId= query.carId

		const bids = await BidsModel.find(queryFormatted)
		return bids ? bids.map(this.adaptToDomain) : []
	}

	async loadAllById(id: string): Promise<Bid | undefined> {
		const bid = await BidsModel.findById(id)
		return bid ? this.adaptToDomain(bid) : undefined
	}

	async loadBest(carId: string): Promise<Bid | undefined> {
		const bid = await BidsModel.findOne({ carId })
		.sort({ amount: -1 })
		.populate('userId');
		
		return bid ? this.adaptToDomain(bid) : undefined
	}

	async create(data: Omit<Bid, 'id'>): Promise<Bid | null> {
		const bid = await BidsModel.create(data)
		return this.adaptToDomain(bid)
	}

}