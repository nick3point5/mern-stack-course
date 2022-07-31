const body = {
	tex: 'something',
}
const options = {
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
	method: 'POST',
	body: JSON.stringify(body),
}

// const postBad = fetch('https://sample-api-six.vercel.app/', options)
// let result
// postBad
// 	.then((res) => {
// 		exampleId = res._id
// 		console.log(res)
// 	})
// 	.catch((error) => {
// 		result = error
// 		console.log(error)
// 	})

const result = await fetch('https://sample-api-six.vercel.app/', options)
console.log(result)