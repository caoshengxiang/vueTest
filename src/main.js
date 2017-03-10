// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import store from './state' // vuex 会自动加载目录下的index
import App from './App'
import router from './router'

import MyPlugin from './components/my_plugin/my_plugin'

Vue.use(MyPlugin)
// Vue.use(Vuex)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
