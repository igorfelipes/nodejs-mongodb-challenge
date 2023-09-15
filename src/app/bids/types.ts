import { Bid } from '../../domain/entities/bids'

export type LoadAllBidsSearchParams = {
	carId?: string
}
export type LoadAllBidsResponse = Bid[] | []

export type CreateBidInput = Omit<Bid, 'id'>

export type CreateBidResponse = Bid | null
