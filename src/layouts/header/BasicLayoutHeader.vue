<template>
    <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
        v-if="collapsed"
        class="trigger"
        @click="setCollapsed"
        />
        <menu-fold-outlined v-else class="trigger" @click="setCollapsed" />
    </a-layout-header>
</template>

<script lang="ts">
import { defineComponent} from 'vue'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
import { getStoreCollapsed } from '@/hooks/getStoreApp.ts'
export default defineComponent({
    name: 'BasicLayoutHeader',
    components: {
        MenuUnfoldOutlined,
        MenuFoldOutlined,
    },
    setup(){
        const { collapsed, setCollapsed} = getStoreCollapsed()
        return {
            collapsed,
            setCollapsed
        }
    }
})
</script>

<style>

</style>
