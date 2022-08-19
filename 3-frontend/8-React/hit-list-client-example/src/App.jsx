import './App.css'
import { GlobalContextProvider } from '@/contexts'
import { Router } from '@/routers'

function App() {
	return (
		<GlobalContextProvider>
			<div className='App'>
				<Router />
			</div>
		</GlobalContextProvider>
	)
}

export default App
