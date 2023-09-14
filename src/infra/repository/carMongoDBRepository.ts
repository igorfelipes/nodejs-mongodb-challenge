import { CarRepository } from '../../data/contracts/carRepository'
import { Car } from '../../domain/entities/car'
import { CarModel } from '../models/car'

export class CarMongoRepository implements CarRepository {

	adaptToDomain(car: any): Car {
		return {
			id: car._id,
			brand: car.brand,
			model: car.model,
			year: car.year,
			startingPrice: car.startingPrice,
			isAuctionClosed: car.isAuctionClosed,
			winnerUserId: car.winnerUserId
		}
	}

	async loadAll(): Promise<Car[] | []> {
		const cars = await CarModel.find()
		return cars ? cars.map(this.adaptToDomain) : []
	}

	async loadById(id: string): Promise<Car | undefined> {
		const car =  await CarModel.findById(id)
		return car ? this.adaptToDomain(car) : undefined
	}

	async create(data: Omit<Car, 'id' | 'isAuctionClosed' | 'winnerUserId'>) {
		const car = await CarModel.create(data)
		return this.adaptToDomain(car)
	}

}