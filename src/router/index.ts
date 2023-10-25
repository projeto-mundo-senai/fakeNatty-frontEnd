import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import mostraPDF from '@/components/mostraPDF.vue'
import GerarDieta from '@/components/GerarDieta.vue'
import PaginaInicial from '@/components/PaginaInicial.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/gerarDieta',
      name: 'geraDieta',
      component: GerarDieta
    },
    {
      path: '/',
      name: 'paginaPrincipal',

      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: PaginaInicial
    },
    {
      path: '/mostrarDieta/:nomearquivo',
      name: 'mostrarDieta',
      component: mostraPDF
    }
  ]
})

export default router
