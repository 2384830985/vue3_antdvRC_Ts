import BasicLayout from '@/layouts/BasicLayout.vue'
import { RouteRecordRaw } from 'vue-router'
// 前端路由表
export const constantRouterComponents = {
    BasicLayout
}
// constantRouterComponents.BasicLayout
// 根级菜单
export const rootRouter: RouteRecordRaw = {
    name: 'index',
    path: '/dashboard',
    component: () => import(`@/layouts/BasicLayout.vue`),
    redirect: '/dashboard/form',
    meta: {
      title: '首页'
    },
    children: [
        {
            name: 'form',
            path: 'form',
            component: () => import(`@/views/form/Form.vue`),
            meta: {
                title: 'from'
            },
        },
        {
            name: 'table',
            path: 'table',
            component: () => import(`@/views/table/Table.vue`),
            meta: {
                title: 'table'
            },
        },
    ]
}

/**
 * 格式化树形结构数据 生成 vue-router 层级路由表
 *
 * @param routerMap
 * @param parent
 * @returns {*}
 */
export const generator = (routerMap: Array<RouteRecordRaw>, parent: RouteRecordRaw) => {
    return routerMap.map(item => {
        const { title, hiddenHeaderContent, target, icon } = item.meta || {}

        const currentRouter: RouteRecordRaw = {
            // 如果路由设置了 path，则作为默认 path，否则 路由地址 动态拼接生成如 /dashboard/workplace
            path: item.path || `${parent && parent.path || ''}`,
            // 路由名称，建议唯一
            name: item.name || '',
            // 该路由对应页面的 组件 :方案1
            // component: constantRouterComponents[item.component || item.key],
            // 该路由对应页面的 组件 :方案2 (动态加载)
            component: (() => import(`@/views/${item.component}`)),

            // meta: 页面标题, 菜单图标, 页面权限(供指令权限用，可去掉)
            meta: {
              title: title,
              icon: icon || undefined,
              hiddenHeaderContent: hiddenHeaderContent,
              target: target,
              permission: item.name
            }
        }
        // 为了防止出现后端返回结果不规范，处理有可能出现拼接出两个 反斜杠
        if (!currentRouter.path.startsWith('http')) {
            currentRouter.path = currentRouter.path.replace('//', '/')
        }
        // 重定向
        item.redirect && (currentRouter.redirect = item.redirect)
        // 是否有子菜单，并递归处理
         // 是否有子菜单，并递归处理
        if (item.children && item.children.length > 0) {
            // Recursion
            currentRouter.children = generator(item.children, currentRouter)
        }
        return currentRouter
    })
}
