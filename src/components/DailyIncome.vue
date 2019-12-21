<template>
	<div class="text-box">
		<div class="text-box-item" v-for="(titleitem ,titleindex) in titleList" :key="titleindex">
			<div>{{titleitem.title}}</div>
			<div class="number-wrap">
				<div
					:class="{'number-item': item != ','}"
					v-for="(item,index) in numArr"
					:key="index">
					<span v-if="item == ','" class="dot">{{item}}</span>
					<span v-else class="number-item-ver">
						<i v-if="titleindex == 0" ref="numberItem">0123456789</i>
						<i v-if="titleindex == 1" ref="orderItem">0123456789</i>
						<i v-if="titleindex == 2" ref="userItem">0123456789</i>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
  name: 'DailyIncome',
  props: {
		income: {
			type: Number,
			default: 666
		},
		ordernum: {
			type: Number,
			default: 666
		},
		usernum: {
			type: Number,
			default: 666
		},
	},
	data() {
		return {
			numArr:[],
			titleList: [{
				title: '今日GMV',
				ref: 'numberItem'
			},{
				title: '今日单量',
				ref: 'orderItem'
			},{
				title: '下单用户',
				ref: 'userItem'
			}]
		}
	},
	mounted() {
		this.$nextTick(()=>{
			// eslint-disable-next-line no-console
			console.log('income-->',this.income)
			// eslint-disable-next-line no-console
			console.log('ordernum-->',this.ordernum)
			// eslint-disable-next-line no-console
			console.log('usernum-->',this.usernum)
			this.increaseNumber();
		})
	},
	methods: {
		getRandomNumber(min, max) {
			return Math.floor(Math.random() * (max - min + 1) + min)
		},
		padZero(num, n) {
			var len = num && num.toString().length;
			while(len < n){
					num = "0" + num;
					len++;
			}
			return num;
		},
		increaseNumber () {
			let timer
			if (timer) {clearInterval(timer)}
			timer = setInterval(() => {
				let numberItems = this.$refs.numberItem
				let orderItems = this.$refs.orderItem
				let userItems = this.$refs.userItem
				this.setNumberTransform(numberItems,this.income)
				this.setNumberTransform(orderItems,this.ordernum)
				this.setNumberTransform(userItems,this.usernum)
				// this.setNumberTransform('numberItem',this.income)
			}, 1000)
		},
		setNumberTransform (refitem,num) {
			let reg = /(?=(\B\d{3})+$)/g;
			this.numArr = this.padZero(num,8).replace(reg,',').split('')
			let numberArr = this.numArr.filter(item => item != ',')
			for (let index = 0; index < refitem.length; index++) {
				let elem = refitem[index]
				elem.style.transform = `translate(-50%, -${numberArr[index] * 10}%)`
			}
		},
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text-box {
  position: fixed;
	height: 300px;
	top: 20px;
	left: 20px;
	z-index: 1;
	overflow: hidden;
}
.text-box-item {
	width: 650px;
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 30px;
	font-weight: 500;
	color: #fff;
}
.number-item {
  width: 40px;
	height: 64px;
  background: url('../assets/num.png') no-repeat center center;
  background-size: cover;
	color: #f5f5f5;
	overflow: hidden;
	font-size: 50px;
	font-weight: bold;
	line-height: 60px;
	margin: 0 6px;
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
ul {
	list-style: unset;
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
</style>
