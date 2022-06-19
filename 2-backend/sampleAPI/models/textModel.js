import mongoose from 'mongoose'

const Schema = mongoose.Schema

const textModel = new Schema({
	text: {
		type: String,
		required: true,
	},
})

export default mongoose.model('text',textModel)