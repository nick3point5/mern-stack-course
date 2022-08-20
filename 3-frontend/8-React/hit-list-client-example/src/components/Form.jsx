import { useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { TargetAPI } from '@/api'
import { GlobalContext } from '@/contexts'
import { WeakPointInput } from '@/components'

const defaultBody = {
	name: '',
	location: '',
	age: 0,
	status: 'alive',
	weakness: [],
}

function once(func) {
	let first = true
	return (event) => {
		if (first) {
			first = false
			func(event)
		}
	}
}

export const Form = ({ target }) => {
	const [globalState, setGlobalState] = useContext(GlobalContext)
	const navigate = useNavigate()
	const params = useParams()

	const [body, setBody] = useState(target || defaultBody)

	const { name, location, age, status, weakness } = body

	async function handlePost(event) {
		event.preventDefault()
		try {
			const newTarget = await TargetAPI.post(body)
			const newGlobalState = {
				...globalState,
			}
			newGlobalState.targetData.push(newTarget)
			setGlobalState(newGlobalState)
			navigate('/')
		} catch (error) {
			navigate('/')
		}
	}

	async function handlePut(event) {
		event.preventDefault()
		try {
			const newBody = {
				updateObj: body,
				id: params.id,
			}

			const newTarget = await TargetAPI.put(newBody)
			const newGlobalState = {
				...globalState,
			}

			const index = globalState.targetData.findIndex(
				(item) => item._id === params.id
			)

			newGlobalState.targetData[index] = newTarget

			setGlobalState(newGlobalState)
			navigate('/')
		} catch (error) {
			navigate('/')
		}
	}

	function handleChange(event, key) {
		const value = event.target.value
		const newBody = {
			...body,
		}

		newBody[key] = value

		setBody(newBody)
	}

	function handleWeaknessChange(event, key) {
		const value = event.target.value
		const newBody = {
			...body,
		}

		newBody.weakness[key] = value

		setBody(newBody)
	}

	function handleWeaknessAdd(event) {
		event.preventDefault()
		const newBody = {
			...body,
		}
		newBody.weakness.push('')

		setBody(newBody)
	}

	function handleWeaknessRemove(event, key) {
		event.preventDefault()
		const newBody = {
			...body,
		}
		newBody.weakness.splice(key, 1)

		setBody(newBody)
	}

	return (
		<form
			onSubmit={target ? once(handlePut) : once(handlePost)}
			className='Form'
		>
			<div className='input-container'>
				<label htmlFor='name-input'>name</label>
				<input
					type='text'
					name='name'
					id='name-input'
					value={name}
					onChange={(event) => handleChange(event, 'name')}
				/>
			</div>
			<div className='input-container'>
				<label htmlFor='status-input'>status</label>
				<select
					name='status'
					value={status}
					id='status-input'
					onChange={(event) => handleChange(event, 'status')}
				>
					<option value='alive'>Alive</option>
					<option value='dead'>Dead</option>
					<option value='unknown'>Unknown</option>
				</select>
			</div>
			<div className='input-container'>
				<label htmlFor='age-input'>age</label>
				<input
					type='number'
					name='age'
					id='age-input'
					value={age}
					onChange={(event) => handleChange(event, 'age')}
				/>
			</div>
			<div className='input-container'>
				<label htmlFor='location-input'>location</label>
				<input
					type='text'
					name='location'
					id='location-input'
					value={location}
					onChange={(event) => handleChange(event, 'location')}
				/>
			</div>
			<div className='weakness-container'>
				<ul className='weaknesses-list'>
					<label name='weaknesses'>
						weaknesses <button onClick={handleWeaknessAdd}>+</button>
					</label>
					{weakness.map((weakPoint, i) => {
						return (
							<WeakPointInput
								weakPoint={weakPoint}
								i={i}
								handleWeaknessChange={handleWeaknessChange}
								handleWeaknessRemove={handleWeaknessRemove}
								key={i}
							/>
						)
					})}
					<br />
				</ul>
			</div>
			<button type='submit'>submit</button>
		</form>
	)
}
