<template>
  <a-drawer
    placement="right"
    :closable="false"
    width="300"
    v-model:visible="visible"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <template #handle>
        <div class="setting-drawer-index-handle" @click.prevent="toggle">
            <SettingOutlined v-if="!visible"/>
            <CloseOutlined v-else/>
        </div>
    </template>
  </a-drawer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { SettingOutlined, CloseOutlined } from '@ant-design/icons-vue'
export default defineComponent({
    components: {
        SettingOutlined,
        CloseOutlined
    },
    setup(){
        const visible = ref(false)
        const toggle = () => {
            visible.value = !visible.value
        }
        return {
            toggle,
            visible
        }
    }
})
</script>

<style lang="less" scoped>
.setting-drawer-index-handle {
    position: absolute;
    top: 240px;
    background: #1890ff;
    width: 48px;
    height: 48px;
    right: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    pointer-events: auto;
    z-index: 1001;
    text-align: center;
    font-size: 16px;
    border-radius: 4px 0 0 4px;

    .anticon {
      color: rgb(255, 255, 255);
      font-size: 20px;
    }
}
</style>