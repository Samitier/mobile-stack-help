<template>
	<main class="fullscreen vscroll transition-all" :style="cssStyle">
		<QuestionComponent v-if="question" :question="question"/>
		<ResultComponent v-if="!question"/>
	</main>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator"
	import { Getter, Mutation } from "vuex-class"
	import { Question } from "@/models/quizz.model"
	import QuestionComponent from "@/components/question.vue"
	import ResultComponent from "@/components/result.vue"

	@Component({
		components: { QuestionComponent, ResultComponent }
	})
	export default class App extends Vue {

		@Getter color: string
		@Getter question: Question

		selectedAnswerIdx: number = 0

		get cssStyle() {
			return { backgroundColor: this.color }
		}
	}
</script>
<style lang="stylus">
	@import "./styles"
</style>
