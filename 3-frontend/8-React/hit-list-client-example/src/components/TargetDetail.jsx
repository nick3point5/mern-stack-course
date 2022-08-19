import { useNavigate } from 'react-router-dom'

export const TargetDetail = ({ target }) => {
	const { name, status, weakness, location, age, _id } = target
	const navigate = useNavigate()
	function handleEdit() {
		navigate(`/edit/${_id}`)
	}
	return (
		<div className='TargetDetail' onClick={handleEdit}>
			<h2>name</h2>
			<p>{name}</p>
			<h2>status</h2>
			<p>{status}</p>
			<h2>age</h2>
			<p>{age}</p>
			{location && (
				<>
					<h2>location</h2>
					<p>{location}</p>
				</>
			)}
			{weakness.length ? (
				<>
					<h2>weakness{weakness.length > 1 ? 'es' : ''}</h2>
					<ul>
						{weakness.map((weakness, key) => {
							return <li key={key}>{weakness}</li>
						})}
					</ul>
				</>
			):''}
		</div>
	)
}
