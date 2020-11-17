import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
import './global.less' // global style
import 'nprogress'
import './permission'
createApp(App).use(store).use(antd).use(router).mount('#app')
