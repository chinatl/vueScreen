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
import Branch from '@/assets/data/branch.json'
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
import '@/assets/css/reset.css'
//console.log(SockJS);
//import VueWebsocket from "vue-websocket";
//Vue.use(VueWebsocket, "http://10.184.1.22:17001/websocket");
//stompClient.subscribe('/topic/in-force-prem-target', data => {
//	console.log(data)
//})


function getQueryString() {
	var URL = location.search;
	if (URL.indexOf('dev=1') !== -1) {
		return '7001'
	} else {
		return '17001'
	}
}
var PORT = getQueryString();
var socket = new SockJS('http://10.184.1.22:' + PORT + '/websocket');
var stompClient = Stomp.over(socket);
Vue.prototype.$sock = stompClient;
/*注册全局过滤器*/
Vue.filter('round', value => {
	if (value) {
		return Math.round((value - 0) / 10000) + '万'
	}
})
Vue.filter('branch',value =>{
	if(value){
		return Branch[value]
	}
})
Vue.filter('number',value =>{
	if(value){
		return (value+'').replace(/\d(?=(?:\d{3})+\b)/g,'$&,')
	}
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
