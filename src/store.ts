import Vue from "vue"
import Vuex from "vuex"
import { quizzData } from "@/assets/quizz-data.ts"
import { Quizz, Question, Answer } from "./models/quizz.model"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		quizz: quizzData,
		colors: ["#d3ece1", "#ffdfba", "#ffffba", "#baffc9", "#cddfda"],
		points: 0
	},
	mutations: {
		setAnswer(state, answer: Answer) {
			state.points += answer.points
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
			return state.quizz.results.find(r => state.points <= r.totalPoints)
		},
		color: state => state.colors[0]
	}
})
