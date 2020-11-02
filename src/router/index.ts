import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Index.vue'
import Transport from '@/views/Transport.vue'
import Lager from '@/views/Lager.vue'
import Avfall from '@/views/Avfall.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      auth: false,
      title: 'Best Service - Hjem'
    }
  },
  {
    path: '/transport',
    name: 'Transport',
    component: Transport,
    meta: {
      auth: false,
      title: 'Best Service - Transport'
    }
  },
  {
    path: '/lager',
    name: 'Lager',
    component: Lager,
    meta: {
      auth: false,
      title: 'Best Service - Lager'
    }
  },
  {
    path: '/avfall',
    name: 'Avfall',
    component: Avfall,
    meta: {
      auth: false,
      title: 'Best Service - Avfall og Sikkerhetsmakulering'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      const el: HTMLElement | null = document.querySelector(to.hash)
      if (el) {
        return window.scrollTo({
          top: el.offsetTop,
          behavior: 'smooth'
        })
      }
    }
    return savedPosition || { x: 0, y: 0 }
  },
  routes
})

export default router
