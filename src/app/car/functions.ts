import { Controller } from '../../types/routes'
import carHandler from "./controller";


export const loadAll: Controller = async (req, res) => {
	const result = await carHandler.loadAll()
	res.send(result)
}

export const loadById: Controller = async (req, res) => {
	const id = req.params.id as unknown as string
	const result = await carHandler.loadById(id)
	res.send(result)
}

export const create: Controller = async (req, res) => {
	const body = req.body
	const result = await carHandler.create(body)
	res.send(result)
}