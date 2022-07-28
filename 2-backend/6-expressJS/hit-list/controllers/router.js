import express from 'express'
import { Target } from '../models/Target.js'

export const router = express.Router()

router
	.get('/', async (req, res) => {
		const filter = req.query
		const obj = await Target.find(filter)
		res.json(obj)
	})
	.get('/:id', async (req, res) => {
		const { id } = req.params
		const obj = await Target.findById(id)
		res.json(obj)
	})
	.post('/', async (req, res) => {
		const objData = req.body

		const obj = await Target.create(objData)
		res.json(obj)
	})
	.put('/:id', async (req, res) => {
		const { id } = req.params
		const { updateObj } = req.body

		const obj = await Target.findByIdAndUpdate(id, updateObj, { new: true })

		res.json(obj)
	})
	.delete("/:id", async (req, res) => {
		const { id } = req.params
		const obj = await Target.findByIdAndDelete(id)
	
		res.json(obj)
	})
