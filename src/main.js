// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import ECharts from 'vue-echarts/components/ECharts.vue'
// import ECharts modules manually to reduce bundle size
import echarts from 'echarts'
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
