import mongoose from 'mongoose'

const Schema = mongoose.Schema

const TargetSchema = new Schema(
	{
		name: {
			type: String, // check if the data type can correct
			required: true, // make property required
			maxlength: 30, // make the maximum length of string 30
		},
		location: {
			type: String,
		},
		weakness: {
			type: [String], // specifies that type is an array of strings
		},
		age: {
			type: Number,
			max: 120, // make the max value 120
			required: true,
		},
		status: {
			type: String,
			required: true,
			default: 'alive', // make default value
		},
	},
	{ timestamps: true } // adds a creation and edit timestamp as Date objects)
)

export const Target = mongoose.model('Target', TargetSchema)
