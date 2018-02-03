import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import repoSearch from '@/components/repo-search'
import repoDetail from '@/components/repo-detail'
import userSearch from '@/components/user-search'
import userDetail from '@/components/user-detail'
import userRepos from '@/components/user-repos'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/repo',
      component: repoSearch
    },
    {
      path: '/repo/:username',
      component: userRepos
    },
    {
      path: '/repo/:username/:reponame',
      component: repoDetail
    },
    {
      path: '/user',
      component: userSearch
    },
    {
      path: '/user/:username',
      component: userDetail
    }
  ]
})
