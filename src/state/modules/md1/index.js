import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

import mutations from './mutations'
import getters from './getters'
import actions from './actions'


const store = new Vuex.Store({
  state: {
    countMd1: 10
  },
  mutations,
  getters,
  actions
})

export default store;
