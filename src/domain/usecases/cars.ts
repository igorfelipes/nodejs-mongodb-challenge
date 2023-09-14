import { CreateCarInput, CreateCarResponse, LoadAllCarResponse, LoadCarByIdResponse } from '../../app/car/types'

export interface LoadAllCar {
	loadAll: () => Promise<LoadAllCarResponse>;
}

export interface LoadCarById {
	loadById: (id: string) => Promise<LoadCarByIdResponse>;
}

export interface CreateCar {
	create: (data: CreateCarInput) => Promise<CreateCarResponse>;
}