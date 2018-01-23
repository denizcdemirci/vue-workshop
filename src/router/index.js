import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Repo from '@/components/repo'
import User from '@/components/user'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/repo',
      name: 'Repo',
      component: Repo
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
