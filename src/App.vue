/* eslint-disable no-console */

<template>
  <div id="app">
    <CoverWrap v-if="coverShow" @click="colsePika()"></CoverWrap>
    <Title></Title>
    <v-chart class="map-wrap" :options="option"></v-chart>
    <DailyIncome :income="income"></DailyIncome>
    <OrderList :list="testdata"></OrderList>
  </div>
</template>

<script>
import DailyIncome from './components/DailyIncome.vue'
import OrderList from './components/OrderList.vue'
import Title from './components/Title.vue'
import CoverWrap from './components/CoverWrap.vue'
import ECharts from "vue-echarts";
import "echarts-gl";
import "echarts/map/js/china.js";

var redata = []

// var locationdata = []
export default {
  name: "app",
  components: {
		DailyIncome,
		OrderList,
		Title,
		CoverWrap,
    "v-chart": ECharts
  },
  data() {
    return {
			coverShow: false,
			testdata: [],
      option: {
				// title: {
				// 	text: 'miss_buyer',
				// 	subtext: 'data from missfresh',
				// 	sublink: 'http://www.missfresh.cn',
				// 	left: 'center',
				// 	textStyle: {
				// 		color: '#fff'
				// 	}
				// },
				tooltip : {
					trigger: 'item',
				},
        geo: {
					type: 'map',
          map: "china",
					roam: true,
					show: true,
					center:[104.114129, 37.550339],
					label:{
						emphasis: {
							show: true
						}
					},
          itemStyle: {
            normal: {
              // 普通状态下的样式
              areaColor: "#004981",
							borderColor: "#029fd4",
							borderWidth: 1,
							shadowBlur: {
								shadowColor: 'rgba(0, 0, 0, 0.5)',
								shadowBlur: 10
							}
            },
            emphasis: {
              // 高亮状态下的样式
              areaColor: "#029fd4"
						}
					}
        },
				backgroundColor: "#044161",
        series: [
          {
            name: "buyer", // series名称
            type: "effectScatter", // series图表类型
            progressive: 1e6,
            coordinateSystem: "geo", // series坐标系类型
						// symbolSize: 1,
						symbolSize: function(val) {
              return val[2] / 10;
            },
            zoomScale: 0.002,
						blendMode: "lighter",
						hoverAnimation: true,
						label: {
							normal: {
								formatter: '{b}',
								position: 'right',
								show: false
							},
							emphasis: {
								show: true
							}
            },
            large: true,
            tooltip: {
              show: true
						},
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke"
            },
            itemStyle: {
              color: "rgb(20, 15, 2)"
						},
						
						shadowBlur: 10,
						shadowColor: "#333",
            postEffect: {
              enable: true
            },
            silent: true,
            dimensions: ["lng", "lat"],
            data: this.convertResData(redata) //后端返回的数据
          }
				],
				legend: {
					orient: 'vertical',
					top: 'bottom',
					left: 'right',
					data:['buyer'],
					textStyle: {
						color: '#fff'
					}
				},
        visualMap: { 
          // type: "continuous", //连续型
          min: 0,
					max: 500,
					splitNumber: 5,
          // calculable: true, // 是否启用值域漫游
          inRange: {
            color: ['#d94e5d','#eac736','#50a3ba']
          },
          textStyle: {
            color: "#fff" // 值域控件的文本颜色
          }
        }
			},
			id: 0,
			income: 0, //今日实收
			maxLength: 5,
			// websock: null,
    }
	},
	created() {
		// this.$socket.emit("sendMessageToServer");
		// this.initWebSocket();
	},
	destroyed() {
		this.websock.close() //离开路由之后断开websocket连接
	},
	methods: {
		convertResData (data) {
			let locationdata = [];
			for (var i = 0; i < data.length; i++) {
				data[i].location.push(data[i].payFee)
				locationdata.push({
					name: data[i].payFee,
					value: data[i].location
				})
			}
			// eslint-disable-next-line no-console
			console.log(locationdata)
			return locationdata;
		},
		initWebSocket() {
			let randomId = new Date().getTime();
			const wsuri = "ws://as-vip-test.missfresh.cn/as/portal/order/missBuyer/ws?userId=" + randomId;
			this.websock = new WebSocket(wsuri);
			this.websock.onmessage = this.websocketonmessage;
			this.websock.onopen = this.websocketonopen;
			this.websock.onerror = this.websocketonerror;
			this.websock.onclose = this.websocketclose;
		},
		websocketonopen(){ //连接建立之后执行send方法发送数据
			var randomId = new Date().getTime();
			let actions = {"userId":randomId};
			this.websocketsend(JSON.stringify(actions));
		},
		websocketonerror(){//连接建立失败重连
			this.initWebSocket();
		},
		websocketonmessage(e){ //数据接收
			const data = JSON.parse(e.data);
			// eslint-disable-next-line no-console
			console.log('onmessage',data);
			this.income = data.totalPayFee;
			if (this.testdata.length > this.maxLength) {
				this.testdata.shift()
			}
			this.testdata.push(data)
			redata = this.testdata
			
			this.option.series[0].data = this.convertResData(this.testdata)
		},
		websocketsend(Data){//数据发送
			this.websock.send(Data);
		},
		websocketclose(e){  //关闭
			// eslint-disable-next-line no-console
			console.log('断开连接',e);
		},
		colsePika() {
			this.coverShow = false
		}
	}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.map-wrap {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>
