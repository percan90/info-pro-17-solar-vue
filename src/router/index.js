import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import SolarHistory from '@/components/SolarHistory'
import Settings from '@/components/Settings'

Vue.use(Router)

export default new Router({
linkActiveClass : 'active',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
  },
  {
      path: '/history',
      name: 'History',
      component: SolarHistory
  },
  {
      path: '/settings',
      name: 'Settings',
      component: Settings
  },
  ]
})
