import { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { TargetAPI } from '@/api'
import { GlobalContext } from '@/contexts'
import { TargetDetail } from '@/components'

export const Details = () => {
	const params = useParams()
	const navigate = useNavigate()

	const [globalState, setGlobalState] = useContext(GlobalContext)

	const index = globalState.targetData.findIndex((item)=> item._id === params.id)
	const target = globalState.targetData[index]

	function handleClick() {
		navigate("/")
	}

	async function handleDelete() {
		const body = {
			id: params.id
		}

		const removedTarget = await TargetAPI.delete(body)

		const newGlobalState = {
			...globalState
		}

		newGlobalState.targetData.splice(index, 1)
		setGlobalState(newGlobalState)

		navigate('/')
	}


	if(!target) return

	return (
		<div className="Details">
			<button onClick={handleClick}>Back</button>
			<TargetDetail target={target}/>
			<button onClick={handleDelete}>Delete</button>
		</div>
	)
}
