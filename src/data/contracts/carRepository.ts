import { Car } from '../../domain/entities/car'

export interface CarRepository {
	loadAll: () => Promise<Car[] | []>
	loadById: (id: string) => Promise<Car | undefined>
	create: (data: Omit<Car, 'id' | 'isAuctionClosed' | 'winnerUserId'>) => Promise<Car>
	update: (id: string, data: Partial<Car>) => Promise<Car>
}