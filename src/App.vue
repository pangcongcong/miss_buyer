/* eslint-disable no-console */

<template>
  <div id="app">
		<Content :text="text" :score="score" @clearClick="clearClick"></Content>
		<Button @btnClick="btnClick" @rightClick="rightClick"></Button>
  </div>
</template>

<script>
import Button from './components/Button.vue'
import Content from './components/Content.vue'
import arr from './utils/constence.js'


export default {
  name: "app",
  components: {
		Button,
		Content
  },
  data() {
    return {
			text: '',
			score: 0
    }
	},
	created() {
		this.text = this.getText()
	},
	methods: {
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
