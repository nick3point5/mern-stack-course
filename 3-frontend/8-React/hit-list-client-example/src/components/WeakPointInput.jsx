export const WeakPointInput = ({weakPoint, i, handleWeaknessChange, handleWeaknessRemove}) => {
	return (
		<li>
			<input
				type='text'
				name={`weakPoint`}
				value={weakPoint}
				onChange={(event) => handleWeaknessChange(event, i)}
			/>
			<button
				onClick={(event) => handleWeaknessRemove(event, i)}
			>
				-
			</button>
		</li>
	)
}