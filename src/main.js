// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import ECharts from 'vue-echarts/components/ECharts.vue'
// import ECharts modules manually to reduce bundle size
import echarts from 'echarts'
/*connect to websocket*/

Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
//(function(window) {
//	function fn() {
//		var width = window.screen.width;
//		var height = window.screen.height;
//		var x = width / 1920;
//		var container = window.document.getElementById('app');
//		if(width > 1920){
//			container.style.transform = 'scale(1)';
//		}else {
//			container.style.transform = 'scale(' + x + ')';
//		}
//		document.body.style.backgroundSize = width + 'px ' + (height + 100) + 'px';
//	}
//	fn();
//	window.onresize = function() {
//		fn()
//	} //初始页面
//})(window);
import '@/assets/css/reset.css'

import SockJs from '@/assets/js/sock'
import {Stomp} from '@/assets/js/stomp.min.js'
//import Stomp from 'webstomp-client'

function getQueryString() {
	var URL = location.search;
	if (URL.indexOf('dev=1') !== -1) {
		return '7001'
	} else {
		return '17001'
	}
}
var PORT = getQueryString();
console.log(PORT)
console.log(SockJS)
console.log(Stomp)
var socket = new SockJS('http://10.184.1.22:' + PORT + '/websocket');
var webstomp = Stomp.over(socket);
webstomp.subscribe('/topic/prem-' + 'I' + '-today-' + 610000, data => {
	console.log(data)
})
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	template: '<App/>'
})
