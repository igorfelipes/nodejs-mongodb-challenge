import { Bid } from '../../domain/entities/bids'

export interface LoadAllBidsSearchParams {
	carId?: string
}
export type CloseAuctionInput = {
	 carId: string 
}
export type CloseAuctionResponse = any
export type LoadAllBidsResponse = Bid[] | []
export type CreateBidInput = Omit<Bid, 'id'>
export type CreateBidResponse = Bid | null
