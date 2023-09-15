import { z } from 'zod'
import { monetaryValueInCentsSchema, stringSchema, yearSchema } from '../../common/zod'

export const createCarSchema = z.object({
	brand: stringSchema,
	model: stringSchema,
	year: yearSchema,
	startingPrice: monetaryValueInCentsSchema,
})