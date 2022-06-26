import Text from '../../models/textModel.js'

export const rootGetController = async (req, res) => {
	try {
		const filter = req.query
		const obj = await Text.find(filter)
		res.json(obj)
	} catch (error) {
		res.status(400)
		console.log(error)
		res.send(error)
	}
}
