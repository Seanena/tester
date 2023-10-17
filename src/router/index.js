import { createRouter, createWebHistory } from 'vue-router'
import MainProductView from '../views/MainProductView.vue'
import CartView from '../views/CartView.vue'
import HistoryOrderView from '../views/HistoryOrderView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
import MarketView from '../views/MarketView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainProductView
    },
    {
      path: '/product/:id',
      name: 'productDetail',
      component: ProductDetailView,
      props: true
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/historyorder',
      name: 'historyOrder',
      component: HistoryOrderView
    },
    {
      path: '/market',
      name: 'market',
      component: MarketView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
})

export default router
