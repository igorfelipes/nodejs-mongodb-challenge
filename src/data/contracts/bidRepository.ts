import { Bid } from '../../domain/entities/bids'

export interface BidRepository {
	loadAll: () => Promise<Bid[] | []>
	loadAllById: (id: string) => Promise<Bid | undefined>
	create: (data: Omit<Bid, 'id'>) => Promise<Bid | null>
}