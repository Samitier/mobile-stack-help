<template>
	<section class="question text-center">
		<h1 class="question-title">{{ question.title }}</h1>
		<div class="selected-answer">
			<div class="icon-container">
				<i 
					v-for="(_, i) in question.answers.length" 
					:key="i" 
					class="fas fa-euro-sign"
					v-if="i <= selectedAnswerIdx"
				></i>
			</div>
			<div>{{ selectedAnswer.title }}</div>
		</div>
		<input 
			v-model="selectedAnswerIdx"
			type="range"
			min="0"
			:max="question.answers.length - 1"
			step="1"
		>
		<a class="btn next valign">
			<b>continuar </b>
			<i class="fas fa-angle-right"></i>
		</a>
	</section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { Getter, Mutation } from "vuex-class"
import { Question } from "@/models/quizz.model"

@Component({})
export default class Home extends Vue {

	@Getter question: Question

	selectedAnswerIdx: number = 0

	get selectedAnswer() {
		return this.question.answers[this.selectedAnswerIdx]
	}
}
</script>

<style lang="stylus" scoped>

	.question
		padding 1em
		max-width: 600px
		margin auto
	.question-title
		font-size 34px
		letter-spacing 1px
	.selected-answer
		font-size 25px
		padding-bottom 2em
	.icon-container
		width 170px
		height 170px
		border-radius 50%
		background white
		margin 1em auto
		i 
			line-height 170px
			font-size 50px;
			opacity 0.6
	.next 
		margin-top 5em
		b 
			font-size 20px
		i
			font-size 45px
			padding-left .2em
</style>

