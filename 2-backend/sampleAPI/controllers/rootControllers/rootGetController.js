import Text from "../../models/textModel.js"

export const rootGetController = async (req, res) => {
	const obj = await Text.find({})

	res.json(obj)
}