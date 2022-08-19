import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import { router } from './controllers/router.js'
import { targetRouter } from './controllers/targetRouter.js'

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
	console.log('http://localhost:' + PORT)
})


app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.use('/target', targetRouter)
app.use('/', router)

