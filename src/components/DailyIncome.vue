<template>
	<div class="box">
		<ul class="number-wrap">
			<li
				:class="{'number-item': item != ','}"
				v-for="(item,index) in numArr"
				:key="index"
			>
				<span v-if="item == ','" class="dot">{{item}}</span>
				<span v-else class="number-item-ver">
					<i ref="numberItem">0123456789</i>
				</span>
			</li>
		</ul>
	</div>
</template>

<script>

export default {
  name: 'DailyIncome',
  props: {
		income: {
			type: Number,
			default: 0
		}
	},
	computed:{
		income_now() {
			return this.income
		}
	},
	data() {
		return {
			numArr:[],
		}
	},
	mounted() {
		// eslint-disable-next-line no-console
		let tmp = this.padZero(this.income_now,8);
		let reg = /(?=(\B\d{3})+$)/g;
		let real_income = tmp.replace(reg,',')
		this.numArr = real_income.split('')
		this.increaseNumber();
		// this.$nextTick(()=>{
		// 	this.setNumberTransform()
		// })
	},
	methods: {
		getRandomNumber(min, max) {
			return Math.floor(Math.random() * (max - min + 1) + min)
		},
		padZero(num, n) {
			var len = num.toString().length;
			while(len < n){
					num = "0" + num;
					len++;
			}
			return num;
		},
		increaseNumber () {
			let self = this
			this.timer = setInterval(() => {
				self.setNumberTransform()
			}, 3000)
		},
		setNumberTransform () {
			let numberItems = this.$refs.numberItem
			let numberArr = this.numArr.filter(item => item != ',')
			for (let index = 0; index < numberItems.length; index++) {
				let elem = numberItems[index]
				elem.style.transform = `translate(-50%, -${numberArr[index] * 10}%)`
			}
		},
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  position: fixed;
	height: 120px;
	top: 0;
	left: 0;
	z-index: 1;
	overflow: hidden;
}
.number-item {
  width: 50px;
	height: 80px;
  background: url('../assets/num.png') no-repeat center center;
  background-size:cover;
	color: #fff;
	overflow: hidden;
	font-size: 60px;
	font-weight: bold;
	line-height: 40px;
	margin: 0 10px;
}
.number-wrap {
	display: flex;
}
.number-item-ver {
	position: relative;
	display: inline-block;
	writing-mode: vertical-rl;
	text-orientation: upright;
}
.dot {
	width: 20px;
	height: 80px;
	color: #f9f9f9;
	font-size: 40px;
	font-weight: bold;
	display:table-cell; 
	vertical-align:bottom;
}
.number-item span {
	position: relative;
	display: inline-block;
	margin-right: 10px;
	width: 100%;
	height: 100%;
	writing-mode: vertical-rl;
	text-orientation: upright;
	overflow: hidden;
}
.number-item i {
	position: absolute;
	top: 0;
	left: 50%;
	transform: translate(-50%,0);
	transition: transform 1.5s ease-in-out;
	letter-spacing: 10px;
	/* animation: 2s move ease-in-out; */
}
@keyframes move{0%{top:-500%;}100%{top:0;}}
</style>
