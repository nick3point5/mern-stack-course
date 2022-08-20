// src/components/Button.jsx
import { useState, useEffect } from "react"

export const Button = (props) => {
	const [count, setCount] = useState(0)
	function handleClick() {
		setCount(count+1)
	}
	useEffect(()=>{
		return ()=> {
			console.log("unmount")
		}
	},[])
	return (
		<div className='button-component'>
			<button onClick={handleClick}>{props.name} {count}</button>
		</div>
	)
}