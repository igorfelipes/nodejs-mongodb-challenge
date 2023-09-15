import { CreateBid, LoadAllBids, LoadBidById } from '../../domain/usecases/bids'
import { CreateBidInput } from './types'
import { Body, Get, Post, Route, Security, Tags } from 'tsoa'
import { makeBidService } from '../../infra/factories/services/bidServiceFactory'
import { Bid } from '../../domain/entities/bids'

@Tags("Bids")
@Security("bearerAuth")
@Route("bids")
export class BidHandler {
	constructor(private readonly service: LoadAllBids & LoadBidById & CreateBid) {}
		
	@Get("/")
	async loadAll() {
		const bids = await this.service.loadAll();
		return bids as Bid[];
	}

	@Get("/:id")
	async loadById(id: string) {
		return await this.service.loadById(id);
	}

	@Post("/")
	async create(@Body() data: CreateBidInput) {
			return await this.service.create(data);
	}
}

const service = makeBidService()
export default new BidHandler(service)