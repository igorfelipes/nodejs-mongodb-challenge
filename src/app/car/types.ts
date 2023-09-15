import { Car } from '../../domain/entities/car'

export type LoadAllCarResponse = Car[] | []
export type LoadCarByIdResponse = Car | undefined
export type CreateCarResponse = Car
export type UpdateCarResponse = Car
export type CreateCarInput = Omit<Car, 'id' | 'isAuctionClosed' | 'winnerUserId'>