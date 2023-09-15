import { BidRepository } from '../../data/contracts/bidRepository'
import { Bid } from '../../domain/entities/bids'
import { CreateBid, LoadAllBids, LoadBidById } from '../../domain/usecases/bids'
import { CreateBidInput, CreateBidResponse, LoadAllBidsResponse, LoadAllBidsSearchParams } from './types'
import { LoadCarById } from '../../domain/usecases/cars';
import { ErrorCode } from '../../domain/errors/errorCode'
import { LoadUserById } from '../../domain/usecases/user'

export class BidService implements LoadAllBids, LoadBidById, CreateBid {
	constructor(private readonly carService: LoadCarById, private readonly userService: LoadUserById, private readonly repository: BidRepository){}

	async loadAll(query?: LoadAllBidsSearchParams): Promise<LoadAllBidsResponse> {
		return await this.repository.loadAll(query)
	}

	async loadById(id: string): Promise<Bid | undefined> {
		return await this.repository.loadAllById(id)
	}

	async create(data: CreateBidInput): Promise<CreateBidResponse> {
		const carExists = await this.carService.loadById(data.carId)
		if(!carExists) throw ErrorCode.CREATE_BID.CAR_NOT_FOUND

		const userExists = await this.userService.loadById(data.userId)

		if(!userExists) throw ErrorCode.CREATE_BID.USER_NOT_FOUND

		if(data.amount < carExists.startingPrice) throw ErrorCode.CREATE_BID.INVALID_AMOUNT

		return await this.repository.create(data)
		
	}
}