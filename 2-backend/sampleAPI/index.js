import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import { rootRouter } from './controllers/index.js'

dotenv.config()

const connectionString =
	process.env.MONGO_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/sampleAPI'
const PORT = process.env.PORT || 3000

mongoose.connect(connectionString, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

mongoose.connection.on('connected', () => {
	console.log(`Mongoose connected`)
})

const app = express()

app.listen(PORT, () => {
	console.log('Server is running on port: ' + PORT)
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', rootRouter)
