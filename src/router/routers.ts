import UserLayout from '@/layouts/UserLayout.vue'
import { rootRouter } from './totalRouter'

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
    rootRouter,
    {
      path: '/user',
      component: UserLayout,
      redirect: '/user/login',
      hidden: true,
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login.vue')
        },
      ]
    },
    {
      path: '/404',
      component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404.vue')
    },
    {
      path: '/',
      redirect: '/user/login',
    },

  ]
