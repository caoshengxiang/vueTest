import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import md1 from './modules/md1'  // 引入时会自动寻找index

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations,
  getters,
  actions,
  modules: {
    md1
  }
})

export default store;
