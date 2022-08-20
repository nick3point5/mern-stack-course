import { useContext } from 'react'
import { GlobalContext } from '@/contexts'
import { useNavigate } from 'react-router-dom'
import { Target } from '@/components'


export const Home = () => {
	const [globalState, setGlobalState] = useContext(GlobalContext)
	const navigate = useNavigate()

	function handleClick() {
		navigate('/target/new')
	}

	return (
		<div className='Home'>
			<button onClick={handleClick}>New Hit</button>
			<div className="hit-list">
				{globalState.targetData.map((target, id) => {
					return <Target key={id} target={target} />
				})}
			</div>
		</div>
	)
}
