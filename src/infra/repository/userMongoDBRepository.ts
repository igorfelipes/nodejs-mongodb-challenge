import { LoadUserByIdResponse } from '../../app/user/types'
import { UserRepository } from '../../data/contracts/userRepository'
import { User } from '../../domain/entities/user'
import { UserModel } from '../models/User';

export class UserMongoDBRepository implements UserRepository {

	adaptToDomain(data: any): User {
		const { _id, name, email } = data
		return new User({ id: _id, name, email })
	}

	async findMany(): Promise<User[] | []> {
		const data = await UserModel.find()
		
		return data? data.map(this.adaptToDomain) : []
	}

	async loadById(id: string): Promise<LoadUserByIdResponse | undefined> {
		const user = await UserModel.findById(id)
		return user ? this.adaptToDomain(user) : undefined
	}

	async loadByEmail(email: string): Promise<User | undefined> {
		const user = await UserModel.findOne({ email })
		return user ? {
			...this.adaptToDomain(user),
			password: user.password
		} : undefined
	}

	async create(data: User): Promise<User> {
		const response = await UserModel.create(data)
		return this.adaptToDomain(response)
	}

	async update(id: string, data: Partial<User>): Promise<User | undefined> {
		return undefined
	}

	async delete(id: string): Promise<boolean> {
		return true
	}

	async authenticate(email: string): Promise<User | undefined> {
		return undefined
	}

}