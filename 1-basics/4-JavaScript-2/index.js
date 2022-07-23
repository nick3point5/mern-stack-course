class Team{
	static #numberOfTeammates = 0
	constructor(name, job) {
		this.name = name
		this.job = job
		Team.#numberOfTeammates++
	}
	intro() {
		console.log(`The name's ${this.name}. I'm the ${this.job}`)
	}
	static getNumberOfTeammates() {
		console.log(this.#numberOfTeammates)
	}
}

// function createTeam() {
// 	let numberOfTeammates = 0
// 	getNumberOfTeammates =() =>{
// 		console.log(numberOfTeammates)
// 	}
// 	return function (name, job) {
// 		this.name = name
// 		this.job = job
// 		numberOfTeammates++
// 		this.intro =()=> {
// 			console.log(`The name's ${this.name}. I'm the ${this.job}`)
// 		}
// 	}
// }

// const Team = createTeam()


const vinny =  new Team("Vinny", "muscle")
console.log(Team.numberOfTeammates)
const vinDiesel = new Team("Vin Diesel", "get away driver")
const winkle = new Team("Winkel Von Stroheim", "brains")
Team.getNumberOfTeammates()

console.log(winkle.numberOfTeammates)