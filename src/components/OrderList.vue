<template>
	<div class="list-box">
		<div class="list-wrap">
			<transition-group name="list" mode="out-in">
				<div
					v-for="(item,index) in list"
					:key="index" class="lis-ul"
					@after-leave="autoPlay">
					<div class="list-item">{{item.city}}的{{item.nickName}}刚刚支付了<span class="price">{{item.payFee}}</span>元</div>
				</div>
			</transition-group>
		</div>
	</div>
</template>

<script>

export default {
  name: 'OrderList',
  props: {
		list: {
			type: Array,
			default: function() {
				return []
			}
		}
	},
	data() {
		return {
			numArr:[],
		}
	},
	mounted() {
		// eslint-disable-next-line no-console
		this.numArr = this.numArr.concat(this.list);
	},
	methods: {
		autoPlay() {
			// eslint-disable-next-line no-console
			if (timer) clearTimeout(timer);

			let timer = setTimeout(() => {
				if (this.numArr.length > 10) {
					this.numArr.splice(0,5).push(this.list)
				}
				clearTimeout(timer);
			}, 2000);
		},
	}
}
</script>

<style scoped>
.list-box {
  position: fixed;
	width: 400px;
	height: 620px;
	overflow: hidden;
	bottom: 10vh;
	left: 0;
	z-index: 1;
}
.list-wrap {
	background: rgba(15, 89, 164, 0.2);
	width: 360px;
	height: 600px;
	margin: 0 20px 50px 20px;
	overflow: hidden;
	border: 2px solid #2775b6;
	color: #fff;
	line-height: 30px;
	font-size: 14px;
	border-radius: 20px;
	box-shadow: 4px 4px 6px #2f90b9;
	box-sizing: border-box;
	padding: 20px 0;
	font-weight: 500
}
.list-item {
	height: 30px;
	border-bottom: 1px silid #fff;
	text-align: center;
	overflow: hidden;
	white-space: nowrap;
}
.price {
	color: #d2b116;
}
.lis-ul {
	transition: all 1s;
}
.list-enter, .list-leave-to {
	opacity: 0;
  transform: translateY(30px);
}
.list-leave-active {
  position: absolute;
}
</style>
