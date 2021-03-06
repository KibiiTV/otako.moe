import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from '@/components/Login'
import Error404 from '@/components/Error404'

Vue.use(Router)

export default new Router({
  // mode: 'history', not using history mode now
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '*',
      component: Error404
    }
  ]
})
