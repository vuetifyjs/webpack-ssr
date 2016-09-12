import Vue from 'vue'
import Router from 'vue-router'

import GetStartedView from '../views/GetStartedView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: GetStartedView }
  ]
})