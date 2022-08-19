import { useContext } from 'react'
import { Form } from './components/Form'
import { GlobalContextProvider } from './contexts/GlobalContext/GlobalContextProvider'

import { GlobalContext } from './contexts/GlobalContext/GlobalContext'

function App() {
	const buttonNames = ["button","bbbutton","bbbbbbbbutton"]




	return (
		<GlobalContextProvider>
			<div className='App'>
				<Form />
			</div>
		</GlobalContextProvider>

	)
}

export default App
