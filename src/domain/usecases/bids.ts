import { CreateBidInput, CreateBidResponse, LoadAllBidsResponse } from '../../app/bids/types'
import { Bid } from '../entities/bids'

export interface LoadAllBids {
	loadAll: () => Promise<LoadAllBidsResponse>
}

export interface LoadBidById {
	loadById: (id: string) => Promise<Bid | undefined>
}

export interface CreateBid {
	create: (data: CreateBidInput) => Promise<CreateBidResponse>
}
