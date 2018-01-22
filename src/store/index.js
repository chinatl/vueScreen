import Vue from 'vue'
import Vuex from 'vuex'
/*导入模块*/
Vue.use(Vuex)
const state = {
	branch: "610000",
	cal_type: 'I', //I是实收，R是录单
	maskShow: false
}
const mutations = {
	success(state, user) {
		state.loading = true;
	},
	open(state) {
		state.maskShow = true;
	},
	close(state) {
		state.maskShow = false;
	},
	check(state) {
		state.maskShow = !state.maskShow; 
	}
}
export default new Vuex.Store({
	state,
	mutations
})
