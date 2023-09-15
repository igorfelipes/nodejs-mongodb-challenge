import { SessionService } from '../../../app/session/service'
import { makeSessionMongoDBRepository } from '../repos'
import { makeUserService } from './userServiceFactory'

export const makeSessionService = (): SessionService => {
	const repository = makeSessionMongoDBRepository();
	const userService = makeUserService();
	return new SessionService(repository, userService);
}