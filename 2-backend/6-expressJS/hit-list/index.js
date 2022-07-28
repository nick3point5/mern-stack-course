import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { router } from './controllers/router.js'

dotenv.config()

const connectionString = process.env.MONGO_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/hit-list'

mongoose.connect(connectionString)

mongoose.connection.on('connected', () => {
	console.log(`Mongoose connected`)
})

const app = express()

const PORT = 3000

app.listen(PORT, () => {
	console.log('Server is running on port: ' + PORT)
})

app
	.use(express.json())
	.use(express.urlencoded({extended:false}))
	.use('/', router)
