export const Wrapper = (props) => {
	console.log(props.children)
	return (
		<div>
			wrapper
			{props.children}
		</div>
	)
}
