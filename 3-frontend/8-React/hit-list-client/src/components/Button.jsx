import { useState, useEffect, useRef, useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext/GlobalContext'

export const Button = (props) => {
	const refCount = useRef( null)
	const [globalState, setGlobalState] = useContext(GlobalContext)

	function handleClick() {
		setGlobalState({
			...globalState,
			count: globalState.count + 1
		})
		console.log(globalState)
	}


	return (
		<div className='button-component'>
			<button  ref={refCount} onClick={handleClick}> {globalState.count}</button>
		</div>
	)
}
