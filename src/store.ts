import Vue from "vue"
import Vuex from "vuex"
import { quizzData } from "@/assets/quizz-data.ts"
import { Quizz } from "./models/quizz.model"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		quizz: quizzData,
		colors: ["#d3ece1", "#ffdfba", "#ffffba", "#baffc9", "#bae1ff"]
	},
	mutations: {

	},
	actions: {

	},
	getters: {
		question: state => state.quizz.questions[0],
		color: state => state.colors[0]
	}
})
