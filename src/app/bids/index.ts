import { idStringPathParam } from '../../common/zod'
import { validate } from '../../routes/middlewares'
import { Router } from '../../types/routes'
import { closeAuction, create, loadAll, loadById } from './functions'
import { closeAuctionSchema, createBidSchema, loadAllBidsQueryParamsSchema } from './schema'

const router: Router = {
	basePath: 'bids',
	routes: [
		{
			path: '/',
			method: 'get',
			controller: loadAll,
			middlewares: [
				validate({ query: loadAllBidsQueryParamsSchema})
			]
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
		},
		{
			path: '/close-auction',
			method: 'post',
			controller: closeAuction,
			middlewares: [
				validate({ body: closeAuctionSchema }),
			],
		}
	],
}

export default router