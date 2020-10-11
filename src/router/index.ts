import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
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
