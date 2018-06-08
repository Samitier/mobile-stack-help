<template>
	<section class="result text-center fade-zoom">
		<div class="icon-container">
			<img :src="'/img/' + result.image">
		</div>
		<h1 class="result-title">{{ result.title }}</h1>
		<div class="result-subtitle">{{ result.description }}</div>
	</section>
</template>

<script lang="ts">
	import { Component, Vue, Prop } from "vue-property-decorator"
	import { Getter } from "vuex-class"
	import { Result } from "@/models/quizz.model"

	@Component({})
	export default class ResultComponent extends Vue {
		@Getter result: Result
	}
</script>

<style lang="stylus" scoped>
	.result
		max-width: 600px
		margin auto
		display flex
		flex-direction column
		justify-content center
		height 100%
	.result-title
		font-size 34px
		letter-spacing 1px
		margin .2em 0
	.result-subtitle
		font-size 25px
	.icon-container
		width 170px
		height 170px
		border-radius 50%
		background white
		margin 1em auto
		>img
			width 80%
			position relative
			top 50%
			transform translateY(-50%)
</style>