import { useState } from "react"

export const Form = () => {
	const [inputValue, setInputValue] = useState("")

	function handleSubmit(event) {
		event.preventDefault()
		console.log(inputValue)
	}

	function handleChange(event) {
		const value = event.target.value
		setInputValue(value)
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" value={inputValue} 
			onChange={handleChange}/>
			<button type="submit">Submit</button>
		</form>
	)
}