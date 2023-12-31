import { CloseAuction, CreateBid, LoadAllBids, LoadBidById } from '../../domain/usecases/bids'
import { CloseAuctionInput, CreateBidInput, LoadAllBidsSearchParams } from './types'
import { Body, Get, Post, Queries, Route, Security, Tags } from 'tsoa'
import { makeBidService } from '../../infra/factories/services/bidServiceFactory'
import { Bid } from '../../domain/entities/bids'

@Tags("Bids")
@Security("bearerAuth")
@Route("bids")
export class BidHandler {
	constructor(private readonly service: LoadAllBids & LoadBidById & CreateBid & CloseAuction) {}
		
	@Get("/")
	async loadAll( @Queries() query: LoadAllBidsSearchParams) {
		const bids = await this.service.loadAll(query);
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

	@Post("/close-auction")
  async closeAuction(@Body() data: CloseAuctionInput) {
    return await this.service.closeAuction(data);
  }

}

const service = makeBidService()
export default new BidHandler(service)