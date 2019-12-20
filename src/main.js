import Vue from 'vue'
import App from './App.vue'
import ECharts from 'vue-echarts'
import 'echarts-gl'

Vue.config.productionTip = false

new Vue({
	render: h => h(App)
}).$mount('#app')
Vue.component('v-chart', ECharts)

