import { CreateBidInput, CreateBidResponse, LoadAllBidsResponse, LoadAllBidsSearchParams } from '../../app/bids/types'
import { Bid } from '../entities/bids'

export interface LoadAllBids {
	loadAll: (data?: LoadAllBidsSearchParams) => Promise<LoadAllBidsResponse>
}

export interface LoadBidById {
	loadById: (id: string) => Promise<Bid | undefined>
}

export interface CreateBid {
	create: (data: CreateBidInput) => Promise<CreateBidResponse>
}
