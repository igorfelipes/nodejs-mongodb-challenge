import { LoadOneSessionInput, LoadOneSessionResponse } from '../../app/session/types'
import { SessionRepository } from '../../data/contracts/sessionRepository'
import { Session } from '../../domain/entities/session'
import { SessionModel } from '../models/session'

export class SessionMongoRepository implements SessionRepository {

	adaptToDomain(data: any): Session {
		return {
			id: data._id,
			userId: data.userId,
			token: data.token,
			expires: data.expires,
			userAgent: data.userAgent
		}
	}

	async create(
		userId: string,
		token: string,
		expireDate: number,
		userAgent?: string
	): Promise<Session | undefined> {
		const session = await  SessionModel.create({
			userId,
			token,
			expires: new Date(expireDate),
			userAgent
		})

		return this.adaptToDomain(session)
	}

	async loadOne(
		data: LoadOneSessionInput
	): Promise<LoadOneSessionResponse | undefined> {
		const session = await SessionModel.findOne({
			...data,
		})
		.select('token userId')
		.sort({ createdAt: -1 })
		.exec()

		return session ? {
			token: session.token,
			userId: session.userId.toString(),
		} : undefined
	}
}