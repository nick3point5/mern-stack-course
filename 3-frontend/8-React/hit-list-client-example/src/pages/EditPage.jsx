import { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { GlobalContext } from '@/contexts'
import { Form } from "@/components"

export const EditPage = () => {
	const params = useParams()
	const navigate = useNavigate()

	const [globalState, setGlobalState] = useContext(GlobalContext)

	const index = globalState.targetData.findIndex((item)=> item._id === params.id)
	const target = globalState.targetData[index]

	function handleClick() {
		navigate(`/${params.id}`)
	}

	if(!target) return

	return (
		<div className='EditPage'>
			<button onClick={handleClick}>Back</button>
			<Form target={target}/>
		</div>
	)
}
