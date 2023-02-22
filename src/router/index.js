import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'chatai',
    component: () => import(/* webpackChunkName: "about" */ '../views/ChatAI.vue')
  },
  {
    path: '/excel',
    name: 'excel',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  },
  {
    path: '/imgai',
    name: 'imgai',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ImgAI.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
