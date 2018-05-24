export interface Quizz {
	questions: Question[],
	results: Result[]
}

export interface Question {
	title: string,
	answers: Answer[]
}

export interface Answer {
	title: string,
	image: string,
	result: number,
}

export interface Result {
	title: string,
	description: string
}
