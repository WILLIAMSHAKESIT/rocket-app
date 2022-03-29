import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CapsulesParentComponent from '../views/CapsulesParentComponent.vue'
import LauchesParentComponent from '../views/LaunchesParentComponent.vue'
import HistoryParentComponent from '../views/HistoryParentComponent.vue'
import RocketsParentComponent from '../views/RocketsParentComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/capsules',
      name: 'capsules',
      component: CapsulesParentComponent
    },
    {
      path: '/launches',
      name: 'launches',
      component: LauchesParentComponent
    },
    {
      path: '/history',
      name: 'history',
      component: HistoryParentComponent
    },
    {
      path: '/rockets',
      name: 'rockets',
      component: RocketsParentComponent
    }
  ]
})

export default router
