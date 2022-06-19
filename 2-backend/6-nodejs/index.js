var contentCreator = new Promise((resolve) => {
	function countToBillion(name) {
		for (let i = 0; i < 1e9; i++) {
			
		}
		return ` subscribe for more ${name}`
	}

	resolve(countToBillion)
})


async function beast2() {
	const countToBillion = await contentCreator
	console.log("")
	console.log(countToBillion("Mr. Beast 2.2"))
}

var beast3 = async () => {
	const countToBillion2 = await contentCreator
	console.log("")
	console.log(countToBillion2("Mr. Beast 2.3"))
}

beast2()
beast3()

console.log("watching")