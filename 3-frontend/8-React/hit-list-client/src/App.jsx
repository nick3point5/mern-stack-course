import { useContext } from 'react'
import { Form } from './components/Form'
import { Button } from './components/Button'
import { GlobalContextProvider } from './contexts/GlobalContext/GlobalContextProvider'

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
