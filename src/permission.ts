import router from './router'
import {RouteLocationNormalized, NavigationGuardNext} from 'vue-router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false }) // NProgress Configuration
const loginRoutePath = '/user/login'
router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext): void => {
    // 权限的控制在这里
    NProgress.start()
    next()
    // if(to.path === loginRoutePath) {
    //     next()
    // }
    // next({ path: loginRoutePath, query: { redirect: to.fullPath } })
    // NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
})

router.afterEach(() => {
    NProgress.done() // finish progress bar
})
