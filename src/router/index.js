import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Task from '@/components/Task'
import User from '@/components/User'

import { authTokenKey } from '../constant'

Vue.use(Router)

const requireAuth = (to, from, next) => {
  // TODO : get the token
  const authToken = localStorage.getItem(authTokenKey)
  // TODO : Write auth process with axios
  if (authToken) {
    next()
  } else {
    next({
      path: '/login'
    })
  }
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/task/:id',
      name: 'Task',
      component: Task,
      beforeEnter: requireAuth
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: requireAuth
    }
  ]
})
