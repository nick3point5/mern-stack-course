import express from 'express'
import { rootGetController } from './rootGetController.js'
import { rootGetIdController } from './rootGetIdController.js'
import { rootPostController } from './rootPostController.js'
import { rootPutController } from './rootPutController.js'
import { rootDeleteController } from './rootDeleteController.js'

export const rootRouter = express.Router()

rootRouter
	.get('/', rootGetController)
	.get('/:id', rootGetIdController)
	.post('/', rootPostController)
	.put('/', rootPutController)
	.delete('/', rootDeleteController)
