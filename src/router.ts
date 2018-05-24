import Vue from "vue"
import Router from "vue-router"
import Question from "./views/Question.vue"

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: "/",
			name: "question",
			component: Question,
		}
	],
})
