import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/components/Dashboard/Layout/DashboardLayout'

import Register from '@/components/Dashboard/Views/Register'
import NumDisplay from '@/components/Dashboard/Views/NumDisplay'
import Kiosk from '@/components/Dashboard/Views/Kiosk'
import Menu from '@/components/Dashboard/Views/Menu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: DashboardLayout,
      redirect: '/admin/register'
    },
    {
      path: '/admin',
      component: DashboardLayout,
      redirect: '/admin/register',
      children: [
        {
          path: 'register',
          name: 'Register',
          component: Register
        },
        {
          path: 'numDisplay',
          name: 'NumDisplay',
          component: NumDisplay
        },
        {
          path: 'kiosk',
          name: 'Kiosk',
          component: Kiosk
        },
        {
          path: 'list',
          name: 'Menu',
          component: Menu
        }
      ]
    }
  ]
})
