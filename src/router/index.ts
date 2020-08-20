import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import home from '../components/home-component.vue'
import stockmarket from '../components/stock-market-component.vue'
import portfolio from '../components/portfolio-component.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    "path": '/',
    "name": 'Home',
    "component": home
  },
    {
      "path": '/portfolio',
      "name": 'Portfolio',
      "component": portfolio
    }
    ,
    {
      "path": '/stocks',
      "name": 'Stocks',
      "component": stockmarket
    }
]

const router = new VueRouter({
  "mode": 'history',
  "base": process.env.BASE_URL,
  routes
})

export default router
