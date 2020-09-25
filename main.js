import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
import './static/iconfont/iconfont.css'
App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
