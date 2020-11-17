<template>
    <a-layout id="components-layout-demo-custom-trigger">
        <!--导航-->
        <basic-layout-menu/>
        <a-layout>
            <!--header-->
            <basic-layout-header/>
            <!--设置-->
            <basic-setting/>
            <a-layout-content
                :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
            >
                <router-view/>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script lang="ts">
import { defineComponent} from 'vue'
import BasicLayoutMenu from './menu/BasicLayoutMenu.vue'
import BasicLayoutHeader from './header/BasicLayoutHeader.vue'
import BasicSetting from './setting/BasicSetting.vue'

export default defineComponent({
    components: {
        BasicLayoutMenu,
        BasicLayoutHeader,
        BasicSetting
    },
    setup(){
        return {
        }
    },
});

</script>
<style>
#components-layout-demo-custom-trigger{
    /*position: absolute;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*bottom: 0;*/
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
