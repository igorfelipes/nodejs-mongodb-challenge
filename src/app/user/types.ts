import { User } from '../../domain/entities/user'

export type UserCreate = Omit<User, 'id'>

export type UserUpdate = Partial<UserCreate>

export type UserResponse = Omit<User, 'password'>

export type LoadAllUserResponse = UserResponse[] | []

export type LoadUserByIdResponse = UserResponse | undefined