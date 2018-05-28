export interface Quizz {
	questions: Question[],
	results: Result[]
}

export interface Question {
	title: string,
	answers: Answer[],
	singleIcon: boolean
}

export interface Answer {
	title: string,
	image: string,
	result: number,
}

export interface Result {
	title: string,
	description: string,
	image: string
}
