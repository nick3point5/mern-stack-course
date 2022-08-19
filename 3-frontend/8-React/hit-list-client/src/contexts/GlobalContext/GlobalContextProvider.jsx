import { useState } from 'react'
import { GlobalContext } from './GlobalContext'

const initState = {
	count: 0,
}

export const GlobalContextProvider = (props) => {
	const [globalState, setGlobalState] = useState(initState)
	return (
		<GlobalContext.Provider value={[globalState, setGlobalState]}>
			{props.children}
		</GlobalContext.Provider>
	)
}