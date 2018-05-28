import Vue from "vue"
import Vuex from "vuex"
import { quizzData } from "@/assets/quizz-data.ts"
import { Quizz, Question } from "./models/quizz.model"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		quizz: quizzData,
		colors: ["#d3ece1", "#ffdfba", "#ffffba", "#baffc9", "#cddfda"],
		answers: [] as number []
	},
	mutations: {
		setAnswer(state, answer: number) {
			if (!state.answers.length) {
				state.answers = new Array(state.quizz.questions[0].answers.length).fill(0)
			}
			state.answers[answer]++
		},
		removeQuestion(state, question: Question) {
			const i = state.quizz.questions.indexOf(question)
			state.quizz.questions.splice(i, 1)
		},
		changeColors(state) {
			state.colors.unshift(state.colors.pop())
		}
	},
	actions: {
		onNewAnswer({ commit }, { question, answer }) {
			commit("setAnswer", answer)
			commit("removeQuestion", question)
			commit("changeColors")
		}
	},
	getters: {
		question(state) {
			const { questions } = state.quizz
			if (!questions.length) return null
			const idx = Math.floor(Math.random() * questions.length)
			return state.quizz.questions[idx]
		},
		result(state) {
			const selectedAnswer = state.answers.indexOf(Math.max(...state.answers))
			return state.quizz.results[selectedAnswer]
		},
		color: state => state.colors[0]
	}
})
