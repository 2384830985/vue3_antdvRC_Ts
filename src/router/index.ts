import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import {constantRouterMap} from './routers'

const routes: Array<RouteRecordRaw> = [
  ...constantRouterMap
]

// history: createWebHistory(process.env.BASE_URL),
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
