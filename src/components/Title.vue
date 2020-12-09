<template>
	<div class="title-box">
		<div class="header-con">
			<div id="home">
				<canvas id="canvas" class="canvas"></canvas>
			</div>
			<div class="title">
				<div class="wrapper">
					<h1 data-heading="MISS">MISS</h1>
				</div>
				<div class="wrapper2">
					<h1 data-heading="FRESH">FRESH</h1>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
  name: 'Title',
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

	}
}
</script>

<style scoped>
.title-box {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;
	width: 100%;
}

.header-con {
	position: relative;
}
#home {
	position: relative;
	width: 100%;
	height: 400px;
	color: #fff;
	overflow: hidden;
	background: none;
}
.canvas {
	z-index: 1;
}
.title {
	width: 600px;
	height: 260px;
	position: absolute;
	font-weight: bold;
	color: #fafafa;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
	animation: letterspacing 2s alternate ease-in-out;
	letter-spacing: 10px;
	opacity: 0.3;
}

.wrapper {
	width: 100%;
	height: 80px;
	font-family: 'tahoma', monospace;
	margin: 0 auto;
	position: relative;
	color: #DB5A6B
}

.wrapper2 {
	width: 100%;
	height: 80px;
	font-family: 'tahoma', monospace;
	margin: 0 auto;
	position: relative;
	color: #DB5A6B
}

.wrapper2 h1{
		top: 30px;
		left: 52%
}

.wrapper2 h1:before{
		top: 1.8% !important;
}

.wrapper2 h1:after{
		top: 6% !important;
		left: -0.1%
}

h1 {
	text-transform: uppercase;
	transform: translate(-50%, -50%) skew(5deg) rotate(-7deg);
	font-size: 100px;
	top: 1%;
	left: 50%;
	position: absolute;
	font-weight: 900;
	color: transparent;
}

h1:before {
		content: attr(data-heading);
		position: absolute;
		left: 0;
		top: -4.8%;
		overflow: hidden;
		width: 100%;
		height: 50%;
		color: #fbf7f4;
		transform: translate(8px, 0) skew(-13deg) scale(1, 1.2);
		z-index: 2;
		text-shadow: 2px -1px 6px rgba(0,0,0,0.2);
}

	
h1:after {
	content: attr(data-heading);
	position: absolute;
	left: 0;
	top: 0;
	overflow: hidden;
	width: 100%;
	height: 100%;
	z-index: 1;
	color: #d3cfcc;
	transform: translate(0vw, 0) skew(13deg) scale(1, 0.8);
	clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0% 100%);
	text-shadow: 2px -1px 6px rgba(0,0,0,0.3);
}
@keyframes letterspacing {
	0% {
		letter-spacing: -20px;
		filter: blur(5px);
	}

	50% {
		filter: blur(8px);
	}

	100% {
		letter-spacing: 10px;
		filter: blur(0);
		color: #fff;
	}
}
</style>
