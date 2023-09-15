import { BidService } from '../../../app/bids/service'
import { makeBidMongoDBRepository } from '../repos'

export const makeBidService = (): BidService => {
	const repository = makeBidMongoDBRepository()

	return new BidService(repository)
}