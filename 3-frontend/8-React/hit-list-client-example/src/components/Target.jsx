import { useNavigate } from 'react-router-dom'

export const Target = ({ target }) => {
	const { name, status, _id } = target
	const navigate = useNavigate()

	function handleClick() {
		navigate(`/target/${_id}`)
	}

	return (
		<div className='Target' onClick={handleClick}>
			<h2>name</h2>
			<p>{name}</p>
			<h2>status</h2>
			<p>{status}</p>
		</div>
	)
}
