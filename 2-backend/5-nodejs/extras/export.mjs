export const apples = { name: 'apples', rating: 2 }
export const oranges = { name: 'oranges', rating: 4 }
export function compare(first, second) {
	if (first.rating > second.rating) {
		return `${first.name} are better than ${second.name}`
	}

	if (second.rating > first.rating) {
		return `${second.name} are better than ${first.name}`
	}

	return 'their the same'
}
