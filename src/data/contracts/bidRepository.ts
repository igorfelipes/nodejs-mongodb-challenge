import { Bid } from '../../domain/entities/bids'
import { LoadAllBidsSearchParams } from '../../app/bids/types';

export interface BidRepository {
	loadAll: (query?: LoadAllBidsSearchParams) => Promise<Bid[] | []>
	loadAllById: (id: string) => Promise<Bid | undefined>
	create: (data: Omit<Bid, 'id'>) => Promise<Bid | null>
}