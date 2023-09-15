import { BidRepository } from '../../data/contracts/bidRepository'
import { Bid } from '../../domain/entities/bids'
import { CreateBid, LoadAllBids, LoadBidById } from '../../domain/usecases/bids'
import { CreateBidInput, CreateBidResponse, LoadAllBidsResponse } from './types'

export class BidService implements LoadAllBids, LoadBidById, CreateBid {
	constructor(private readonly repository: BidRepository){}

	async loadAll(): Promise<LoadAllBidsResponse> {
		return await this.repository.loadAll()
	}

	async loadById(id: string): Promise<Bid | undefined> {
		return await this.repository.loadAllById(id)
	}

	async create(data: CreateBidInput): Promise<CreateBidResponse> {
		return await this.repository.create(data)
	}
}