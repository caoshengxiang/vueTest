import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// import Hello from 'components/Hello'
// import eventBus from '../pages/eventBus/main.vue'
// import vuexTest from '../pages/vuex_test/main.vue'
// import index from '../pages/index.vue'

export default new Router({
  routes: [
    {
      path: '',
      name: 'index',
      component: function (resolve) {
        require.ensure([], function () {
          resolve(require('../pages/index.vue'))
        }, 'index')
      }
    },
    {
      path: '/test',
      name: 'test',
      component: function (resolve) {
        require.ensure([], function () {
          resolve(require('../components/Hello.vue'))
        }, 'test')
      }
    },
    {
      path: '/event_bus',
      name: 'eventBus',
      component: function (resolve) {
        require.ensure([], function () {
          resolve(require('../pages/eventBus/main.vue'))
        }, 'eventBus')
      }
    },
    {
      path: '/vuex_test',
      name: 'vuexTest',
      component: function (resolve) {
        require.ensure([], function () {
          resolve(require('../pages/vuex_test/main.vue'))
        }, 'vuexTest')
      }
    }
  ]
})
