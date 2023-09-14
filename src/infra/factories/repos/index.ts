import { CarMongoRepository } from '../../repository/carMongoDBRepository'
import { UserMongoDBRepository } from '../../repository/userMongoDBRepository'

export const makeUserMongoDBRepository = (): UserMongoDBRepository => 
  new UserMongoDBRepository();

export const makeCarMongoDBRepository = (): CarMongoRepository => 
  new CarMongoRepository();
