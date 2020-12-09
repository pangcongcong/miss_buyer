<template>
	<div class="button-wrap">
		<div class="button left-box" @click="btnClick">
			NO>
		</div>
		<div class="button right-box" @click="rightClick">
			YES>
		</div>
	</div>
</template>

<script>

export default {
  props: {
	},
	data() {
		return {
		}
	},
	mounted() {
		// eslint-disable-next-line no-console
		
	},
	methods: {
		btnClick() {
			this.$emit('btnClick')
		},
		rightClick() {
			this.$emit('rightClick')
		}
	}
}
</script>

<style scoped>
.button-wrap {
	position: fixed;
  bottom: 0;
  left: 50%;
	transform: translate(-50%,0);
  width: 600px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.button {
	width: 260px;
  height: 60px;
	border-radius: 12px;
	color: #fff;
	font-size: 48px;
	font-weight: 500;
  box-sizing: border-box;
  background: #FF4891;
}
.button.left-box {
	background: #d3cfcc;
	color: #000;
}
</style>
