import { CarService } from '../../../app/car/service'
import { makeCarMongoDBRepository } from '../repos'

export const makeCarService = (): CarService => {
	const repository = makeCarMongoDBRepository()

	return new CarService(repository)
}