import { useNavigate } from 'react-router-dom'
import { Form } from '@/components'

export const NewPage = () => {
	const navigate = useNavigate()
	function handleClick() {
		navigate('/')
	}
	return (
		<div>
			<button onClick={handleClick}>Back</button>
			<Form />
		</div>
	)
}
