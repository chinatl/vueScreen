import Vue from 'vue'
import Vuex from 'vuex'
/*导入模块*/
Vue.use(Vuex)
const state = {
	branch: 610000,
	cal_type: 'R',
}
const mutations = {
	success(state, user) {
		state.loading = true;
	}
}
export default new Vuex.Store({
	state,
	mutations
})
