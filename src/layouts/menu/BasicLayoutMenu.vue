<template>
     <a-layout-sider v-model:collapsed="collapsed" class="layout-sider-menu" :trigger="null" collapsible>
        <div class="logo" />
        <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys" @click="titleClick">
            <a-menu-item v-for="item in meList" :key="item.url">
                <icon-font :type="item.icon" />
                <span>{{item.name}}</span>
            </a-menu-item>
        </a-menu>
    </a-layout-sider>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeMount} from 'vue'
import { createFromIconfontCN } from '@ant-design/icons-vue';
import { useRouter, useRoute } from 'vue-router'

const IconFont: any = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

import { getStoreCollapsed } from '@/hooks/getStoreApp.ts'
import { menuList, MenuListInterface } from '@/api/form.ts'
import { AxiosResponse } from 'axios'

export default defineComponent({
    name: 'BasicLayoutMenu',
    components: {
        IconFont,
    },
    setup(props, ctx){
        const router = useRouter()
        const route = useRoute()
        const { collapsed } = getStoreCollapsed()
        const selectedKeys = ref<Array<string>>([])
        const meList = ref<MenuListInterface[]>([])
        const titleClick = ({ key, domEvent, keyPath}: any)=> {
            router.push(key)
        }
        onBeforeMount(()=>{
            menuList()
                .then((res: AxiosResponse)=>{
                    meList.value = res as unknown as MenuListInterface[]
                    selectedKeys.value = [route.path]
                })
        })
        return {
            meList,
            titleClick,
            collapsed,
            selectedKeys
        }
    }
})
</script>

<style>
.layout-sider-menu{
    min-height: 100vh;
}
</style>
