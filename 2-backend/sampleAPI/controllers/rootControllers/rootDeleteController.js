import Text from '../../models/textModel.js'

export const rootDeleteController = async (req, res) => {
	try {
		const { id } = req.body
		const obj = await Text.findByIdAndDelete(id)
		
		if(obj === null) throw {error:"item not found"}

		res.json(obj)
	} catch (error) {
		res.status(400)
		console.log(error)
		res.send(error)
	}
}
