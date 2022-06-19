import Text from "../../models/textModel.js"

export const rootPutController = async (req, res) => {
	const {id, text} = req.body
		const updateObj = {
			text: text
		}
	
	const obj = await Text.findByIdAndUpdate(
			id,
			updateObj,
			{new: true}
		)

	res.json(obj)
}