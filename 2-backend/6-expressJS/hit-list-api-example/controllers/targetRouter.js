import express from 'express'
import { Target } from '../models/Target.js'

export const targetRouter = express.Router()


targetRouter.get('/', async (req, res) => {
	const { query } = req

	const obj = await Target.find(query)

	res.json(obj)
})
targetRouter.get('/:id', async (req, res) => {
	const { id } = req.params

	const obj = await Target.findById(id)

	res.json(obj)
})
targetRouter.post('/', async (req, res) => {
	const objData = req.body

	const obj = await Target.create(objData)

	res.json(obj)
})
targetRouter.put('/', async (req, res) => {
	const { id, updateObj } = req.body

	const obj = await Target.findByIdAndUpdate(id, updateObj, { new: true })

	res.json(obj)
})
targetRouter.delete("/", async (req, res) => {
	const { id } = req.body

	const obj = await Target.findByIdAndDelete(id)

	res.json(obj)
})