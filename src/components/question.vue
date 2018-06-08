<template>
	<section class="question text-center fade-in-up" v-if="animationTrigger">
		<h1 class="question-title">{{ question.title }}</h1>
		<div class="selected-answer">
			<div class="icon-container">
				<i 
					v-for="(_, i) in iconNumber" 
					:key="i" 
					class="fas"
					:class="iconClass"
					v-if="i <= selectedAnswerIdx"
				></i>
			</div>
			<div>{{ selectedAnswer.title }}</div>
		</div>
		<input
			name="answerRange"
			v-model="selectedAnswerIdx"
			type="range"
			min="0"
			:max="question.answers.length - 1"
			@mouseup="onShowNextBtn"
			@touchend="onShowNextBtn"
			step="1"
		>
		<a class="btn next valign zoom-in" v-if="showNextBtn" @click="onSendAnswer">
			<i class="fas fa-angle-right"></i>
		</a>
	</section>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator"
import { Mutation, Action } from "vuex-class"
import { Question } from "@/models/quizz.model"

@Component({})
export default class QuestionComponent extends Vue {

	@Prop() question: Question
	@Action onNewAnswer: (a: object) => any

	selectedAnswerIdx: number = 0
	showNextBtn: boolean = false
	animationTrigger: boolean = true

	get selectedAnswer() {
		return this.question.answers[this.selectedAnswerIdx]
	}

	get iconNumber() {
		return this.question.singleIcon ? 1 : this.question.answers.length
	}

	get iconClass() {
		const bigClass = this.question.singleIcon ? "big" : ""
		const faClass = this.selectedAnswer ? "fa-" + this.selectedAnswer.image : ""
		return faClass + " " + bigClass
	}

	@Watch("question")
	onQuestionChange() {
		this.selectedAnswerIdx = 0
		this.showNextBtn = false
		this.animationTrigger = false
		setTimeout(() => this.animationTrigger = true)
	}

	onShowNextBtn() {
		this.showNextBtn = true
	}

	onSendAnswer() {
		this.onNewAnswer({
			question: this.question,
			answer: this.question.answers[this.selectedAnswerIdx]
		})
	}
}
</script>

<style lang="stylus" scoped>

	.question
		padding .6em 1em
		max-width: 600px
		margin auto
	.question-title
		font-size 32px
		line-height 1.3
		letter-spacing .5px
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
			font-size 45px
			padding 0 4px
			opacity 0.6
		i.big
			font-size 65px
		i.fa-paint-brush
			margin 0px -8px
			font-size 40px
	.next 
		margin-top 3em
		i
			font-size 55px
			background #009688
			color white
			width 70px
			height 70px
			line-height 70px
			border-radius 50%
</style>

