import Text from '../../models/textModel.js'

export const rootPutController = async (req, res) => {
	try {
		const { id, text } = req.body
		const updateObj = {
			text: text,
		}

		const obj = await Text.findByIdAndUpdate(id, updateObj, { new: true })

		if (obj === null) throw { error: 'item not found' }

		res.json(obj)
	} catch (error) {
		res.status(400)
		console.log(error)
		res.send(error)
	}
}
