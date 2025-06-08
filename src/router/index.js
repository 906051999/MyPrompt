import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/prompts',
      name: 'prompts',
      component: () => import('../views/PromptsView.vue')
    },
    {
      path: '/prompt/:id',
      name: 'prompt',
      component: () => import('../views/PromptDetailView.vue')
    }
  ]
})

export default router