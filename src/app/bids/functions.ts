import { Controller } from '../../types/routes'
import bidHandler from './controller';
import { LoadAllBidsSearchParams } from './types'

export const loadAll: Controller = async (req, res) => {
	const query = req.query as unknown as LoadAllBidsSearchParams
	const result = await bidHandler.loadAll(query)
	res.send(result)
}

export const loadById: Controller = async (req, res) => {
	const id = req.params.id as unknown as string
	const result = await bidHandler.loadById(id)
	res.send(result)
}

export const create: Controller = async (req, res) => {
	const body = req.body
	const result = await bidHandler.create(body)
	res.send(result)
}

export const closeAuction: Controller = async (req, res) => {
	const result = await bidHandler.closeAuction(req.body)
	res.send(result)
}