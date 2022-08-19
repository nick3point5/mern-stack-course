export class API {
	constructor(url) {
		this.url = url
		this.headers = {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		}
	}
	async fetch(endpoint, options={}) {
		try {
			const data = await fetch(`${this.url}/${endpoint}`, options)
			const json = await data.json()
			return json
		} catch (error) {
			console.log(error)
			throw error
		}
	}
	async get(id = '') {
		const result = await this.fetch(id)
		return result
	}
	async post(body) {
		const options = {
			headers: this.headers,
			method: 'POST',
			body: JSON.stringify(body),
		}
		const result = await this.fetch("", options)
		return result
	}
	async put(body) {
		const options = {
			headers: this.headers,
			method: 'PUT',
			body: JSON.stringify(body),
		}
		const result = await this.fetch("", options)
		return result
	}
	async delete(body) {
		const options = {
			headers: this.headers,
			method: 'DELETE',
			body: JSON.stringify(body),
		}
		const result = await this.fetch("", options)
		return result
	}
}