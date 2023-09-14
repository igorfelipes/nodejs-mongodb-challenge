import { CarRepository } from '../../data/contracts/carRepository'
import { CreateCar, LoadAllCar, LoadCarById } from '../../domain/usecases/cars'
import { CreateCarInput } from './types'

export class CarService implements LoadAllCar, LoadCarById, CreateCar {
	constructor(private readonly repository: CarRepository){}
	async loadAll() {
		return await this.repository.loadAll()
	}

	async loadById(id: string) {
		return await this.repository.loadById(id)
	}

	async create(data: CreateCarInput) {
		return await this.repository.create(data)
	}
}