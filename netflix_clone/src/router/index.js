import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/layout/'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('../views/home/')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
