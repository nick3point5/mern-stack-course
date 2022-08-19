import { useState, useEffect } from 'react'
import { GlobalContext } from '@/contexts'
import { TargetAPI } from '@/api'

const initState = {
	targetData: [],
}

export const GlobalContextProvider = ({ children }) => {
	const [globalState, setGlobalState] = useState(initState)

	useEffect(() => {
		async function fetchData() {
			const targets = await TargetAPI.get()
			await setGlobalState({
				...globalState,
				targetData: targets,
			})
		}
		fetchData();
	}, [])

	return (
		<GlobalContext.Provider value={[globalState, setGlobalState]}>
			{children}
		</GlobalContext.Provider>
	)
}
