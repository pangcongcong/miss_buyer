<template>
	<div class="content-box">
		<div class="score">
			<div>成绩：{{score}}</div>
			<div class="clear" @click="clearClick">clear</div>
		</div>
		<div class="score time">
			<div>倒计时：{{time}}</div>
			<div class="handle-box">
				<div class="clear" @click="startClick">start</div>
				<div class="clear" @click="resetClick">reset</div>
			</div>
		</div>
		{{text}}
	</div>
</template>

<script>

export default {
  props: {
		text: String,
		score: Number,
		time: Number,
	},
	data() {
		return {
		}
	},
	mounted() {
		
	},
	methods: {
		clearClick(){
			this.$emit('clearClick')
		},
		resetClick() {
			this.$emit('resetClick')
		},
		startClick() {
			this.$emit('startClick')
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
	font-size: 64px;
	font-weight: 900;
	text-align: left;
}
.clear {
	font-size: 24px;
	color: #d3cfcc;
	text-decoration: underline;
}
.time {
	right: 50px;
	text-align: right;
}
.handle-box {
	position: fixed;
	right: 50px;
	width: 200px;
	display: flex;
	justify-content: space-between;
}
</style>
