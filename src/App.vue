<template>
	<main class="fullscreen vscroll" :style="cssStyle">
		<router-view/>
	</main>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator"
	import { Getter, Mutation } from "vuex-class"

	@Component({})
	export default class App extends Vue {

		@Getter color: string

		selectedAnswerIdx: number = 0

		get cssStyle() {
			return { backgroundColor: this.color }
		}
	}
</script>
<style lang="stylus">
	@import "./styles"
</style>
