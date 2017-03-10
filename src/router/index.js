import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Hello from 'components/Hello'
import eventBus from '../pages/eventBus/main.vue'
import vuexTest from '../pages/vuex_test/main.vue'
import index from '../pages/index.vue'

export default new Router({
  routes: [
    {
      path: '',
      name: 'index',
      component: index
    },
    {
      path: '/test',
      name: 'test',
      component: Hello
    },
    {
      path: '/event_bus',
      name: 'eventBus',
      component: eventBus
    },
    {
      path: '/vuex_test',
      name: 'vuexTest',
      component: vuexTest
    }
  ]
})
