import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add_vuex_test(st) {
      st.count++
    }
  }
})

export default store;
