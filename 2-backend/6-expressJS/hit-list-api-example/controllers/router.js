import express from 'express'

export const router = express.Router()

router.get('/', (req, res) => {
	res.send("get")
})
.post('/', (req, res) => {
	res.send("post")
})
.put('/', (req, res) => {
	res.send("put")
})
.delete('/', (req, res) => {
	res.send("delete")
})