import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import {rootRouter} from './controllers/index.js'

const connectionString = 'mongodb://127.0.0.1:27017/sampleAPI'
const PORT = 3000

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