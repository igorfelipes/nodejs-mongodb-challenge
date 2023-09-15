import { z } from 'zod'
import { monetaryValueInCentsSchema, stringSchema } from '../../common/zod'

export const createBidSchema = z.object({
	carId: stringSchema,
	userId: stringSchema,
	amount: monetaryValueInCentsSchema,
})