import Text from '../../models/textModel.js'

export const rootGetIdController = async (req, res) => {
	const { id } = req.params
	const obj = await Text.findById(id)
	console.log(obj)
	res.json(obj)
}
