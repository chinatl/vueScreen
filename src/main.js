// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import Branch from '@/assets/data/branch.json'
import Stomp from 'webstomp-client'

import ECharts from 'vue-echarts'
// register component to use
Vue.component('chart', ECharts)

var urlSearch = window.location.search;
if(urlSearch === ''){
	store.state.cal_type = 'I';
	store.state.branch = '610000';
}else {
	var nextStr = urlSearch.slice(1);
	if (nextStr) {
		var s = nextStr.split('&');
		var obj = {}
		for (var i = 0; i < s.length; i++) {
			obj[s[i].split('=')[0]] = s[i].split('=')[1]
		}
		store.state.cal_type = obj.cal_type || 'I';
		store.state.branch = obj.branch || '610000';
	}
}


Vue.config.productionTip = false;
import '@/assets/css/reset.css'

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
})// 20000 => 2万
Vue.filter('toFixedOne', value => {
	if (value) {
		return value.toFixed(1)
	}
}) // 2.222 => 2.2
Vue.filter('branch',value =>{
	if(value){
		return Branch[value]
	}
})// 610000 => 陕西
Vue.filter('delfour',value =>{
	if(value){
		return ((value - 0) / 10000).toFixed(1)
	}
})// 610000 => 陕西
Vue.filter('number',value =>{
	if(value){
		return (value+'').replace(/\d(?=(?:\d{3})+\b)/g,'$&,')
	}
})//2000 =>  2,000
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
