import { BidService } from '../../../app/bids/service'
import { makeBidMongoDBRepository } from '../repos'
import { makeCarService } from './carServiceFactory'
import { makeUserService } from './userServiceFactory'

export const makeBidService = (): BidService => {
	const carService = makeCarService()
	const userService = makeUserService()
	const repository = makeBidMongoDBRepository()

	return new BidService(carService, userService, repository)
}