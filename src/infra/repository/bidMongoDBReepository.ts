import { BidRepository } from '../../data/contracts/bidRepository'
import { Bid } from '../../domain/entities/bids'
import { BidsModel, BidsSchema } from '../models/bids'

export class BidMongoDBRepository implements BidRepository {

	adaptToDomain(bid: any): Bid {
		return {
			id: bid._id,
			userId: bid.userId,
			carId: bid.carId,
			amount: bid.amount
		}
	}

	async loadAll(): Promise<Bid[] | []>{
		const bids = await BidsModel.find()
		return bids ? bids.map(this.adaptToDomain) : []
	}

	async loadAllById(id: string): Promise<Bid | undefined> {
		const bid = await BidsModel.findById(id)
		return bid ? this.adaptToDomain(bid) : undefined
	}

	async create(data: Omit<Bid, 'id'>): Promise<Bid | null> {
		const bid = await BidsModel.create(data)
		return this.adaptToDomain(bid)
	}

}