import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Profile from "../views/Profile.vue"
import FormView from "../views/FormView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        // ชื่อตรงกับcomponent
        layout: "Main"
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        layout: "Default"
      }
    },
    {
      path:"/profile",
      name:"profile",
      component: Profile,
      meta: {
        layout: "Default"
      }
    },
    {
      path:"/form",
      name:"form",
      component: FormView,
      meta: {
        layout: "Default"
      }
    }
  ]
})

export default router
