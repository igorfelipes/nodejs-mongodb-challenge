import { idStringPathParam } from '../../common/zod'
import { validate } from '../../routes/middlewares'
import { Router } from '../../types/routes'
import { create, loadAll, loadById } from './functions'
import { createBidSchema } from './schema'

const router: Router = {
	basePath: 'bids',
	routes: [
		{
			path: '/',
			method: 'get',
			controller: loadAll,
		},
		{
			path: '/:id',
			method: 'get',
			controller: loadById,
			middlewares: [
				validate({ params: idStringPathParam }),
			],
		},
		{
			path: '/',
			method: 'post',
			controller: create,
			middlewares: [
				validate({ body: createBidSchema }),
			]
		}
	],
}

export default router