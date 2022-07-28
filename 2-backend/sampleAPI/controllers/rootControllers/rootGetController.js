import Text from '../../models/textModel.js'

export const rootGetController = async (req, res) => {
	try {
		const { query } = req
		const obj = await Text.find(query)
		
		res.json(obj)
	} catch (error) {
		res.status(400)
		console.log(error)
		res.send(error)
	}
}
