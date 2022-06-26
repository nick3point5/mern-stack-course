import Text from '../../models/textModel.js'

export const rootPostController = async (req, res) => {
	try {
		const objData = req.body

		const obj = await Text.create(objData)
		res.json(obj)
	} catch (error) {
		res.status(400)
		console.log(error)
		res.send(error)
	}

}