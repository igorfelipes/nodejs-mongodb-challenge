import { z } from 'zod'
import { monetaryValueInCentsSchema, objectIdStringSchema, stringSchema } from '../../common/zod'

export const createBidSchema = z.object({
	carId: objectIdStringSchema,
	userId: objectIdStringSchema,
	amount: monetaryValueInCentsSchema,
})

export const loadAllBidsQueryParamsSchema = z.object({
	carId: objectIdStringSchema.optional()
})