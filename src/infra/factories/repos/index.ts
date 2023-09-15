import { CarMongoRepository } from '../../repository/carMongoDBRepository'
import { SessionMongoRepository } from '../../repository/sessionMongoDBRespository'
import { UserMongoDBRepository } from '../../repository/userMongoDBRepository'

export const makeUserMongoDBRepository = (): UserMongoDBRepository => 
  new UserMongoDBRepository();

export const makeCarMongoDBRepository = (): CarMongoRepository => 
  new CarMongoRepository();

export const makeSessionMongoDBRepository = (): SessionMongoRepository => 
  new SessionMongoRepository();
