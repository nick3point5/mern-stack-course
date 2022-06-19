import Text from "../../models/textModel.js"

export const rootPostController = async (req, res) => {
	const objData = req.body

	const obj = await Text.create(objData)

	res.json(obj)
}