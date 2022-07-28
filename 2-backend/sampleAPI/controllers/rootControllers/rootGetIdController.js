import Text from '../../models/textModel.js'

export const rootGetIdController = async (req, res) => {
	try {
		const { id } = req.params
		const obj = await Text.findById(id)

		res.json(obj)
	} catch (error) {
		res.status(400)
		console.log(error)
		res.send(error)
	}
}
