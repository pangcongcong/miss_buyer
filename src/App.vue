/* eslint-disable no-console */

<template>
  <div id="app">
		<Content :text="text" :score="score" :time="time" @clearClick="clearClick" @resetClick="resetClick" @startClick="startClick"></Content>
		<Button @btnClick="btnClick" @rightClick="rightClick"></Button>
  </div>
</template>

<script>
import Button from './components/Button.vue'
import Content from './components/Content.vue'
import arr from './utils/constence.js'
const countDown = 120
let timerId = null


export default {
  name: "app",
  components: {
		Button,
		Content
  },
  data() {
    return {
			text: '',
			score: 0,
			time: countDown,
    }
	},
	created() {
		this.text = this.getText()
	},
	methods: {
		startClick() {
			timerId && clearInterval(timerId)
			timerId = setInterval(() => {
				this.time -= 1
				if (this.time <= 0) {
					this.time = 0
					return false
				}
			}, 1000);
		},
		resetClick() {
			this.time = countDown
		},
		clearClick() {
			this.score = 0
		},
		btnClick() {
			this.text = this.getText()
			// eslint-disable-next-line no-console
			console.log(this.text)
		},
		rightClick() {
			++this.score
			this.text = this.getText()
		},
		getText() {
			let tmpArr = arr
			let index
			let text

			do{
				index = Math.floor(Math.random()*tmpArr.length);
				text = tmpArr[index]
			} while(tmpArr[index]==null);
			// eslint-disable-next-line no-console
			console.log('tmpArr-->',tmpArr)
			tmpArr[index]=null;

			return text
		}
	}
};
</script>

<style>
body {
	padding: 0;
	margin: 0;
}
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
