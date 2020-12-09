<template>
	<div class="content-box">
		<div class="score">
			<div>成绩：{{score}}</div>
			<div class="clear" @click="clearClick">clear</div>
		</div>
		{{text}}
	</div>
</template>

<script>

export default {
  props: {
		text: String,
		score: Number
	},
	data() {
		return {
		}
	},
	mounted() {
		
	},
	methods: {
		clearClick(){
		// eslint-disable-next-line no-console
		console.log('score',this.score)
			this.$emit('clearClick')
		}
	}
}
</script>

<style scoped>
.content-box {
	position: fixed;
	width: 100vw;
	height: 100vh;
  bottom: 0;
  left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	font-size: 228px;
	font-weight: 900;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 1);
}
.score {
	position: fixed;
	top: 50px;
	left: 50px;
	color: #FF4891;
	font-size: 48px;
	font-weight: 500;
	text-align: left;
}
.clear {
	font-size: 24px;
	color: #d3cfcc;
	text-decoration: underline;
}
</style>
