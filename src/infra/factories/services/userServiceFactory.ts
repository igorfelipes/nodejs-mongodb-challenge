import { UserService } from "../../../app/user/service";
import { makeUserMongoDBRepository } from "../repos";

export const makeUserService = (): UserService => {
  const repository = makeUserMongoDBRepository();
  return new UserService(repository);
};
