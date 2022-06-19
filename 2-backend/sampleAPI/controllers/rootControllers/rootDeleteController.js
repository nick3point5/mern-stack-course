import Text from "../../models/textModel.js"

export const rootDeleteController = async (req, res) => {
	const {id} = req.body
	
	const obj = await Text.findByIdAndDelete(id)

	res.json(obj)
}