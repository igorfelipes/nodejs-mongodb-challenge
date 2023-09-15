import { CarRepository } from '../../data/contracts/carRepository'
import { Car } from '../../domain/entities/car'
import { CreateCar, LoadAllCar, LoadCarById, UpdateCar } from '../../domain/usecases/cars'
import {CreateCarInput, CreateCarResponse, LoadAllCarResponse, LoadCarByIdResponse, UpdateCarResponse } from './types'

export class CarService implements LoadAllCar, LoadCarById, CreateCar, UpdateCar {
	constructor( private readonly repository: CarRepository){}
	async loadAll():Promise<LoadAllCarResponse> {
		return await this.repository.loadAll()
	}

	async loadById(id: string): Promise<LoadCarByIdResponse> {
		return await this.repository.loadById(id)
	}
	async create(data: CreateCarInput):Promise<CreateCarResponse>  {
		return await this.repository.create(data)
	}

	async update(id: string, data: Partial<Car>):Promise<UpdateCarResponse> {
		return await this.repository.update(id, data)
	}

}