<template>
  <div class="main">
    <a-form :layout="form.layout"
    class="user-layout-login"
    :model="form">
        <a-form-item>
            <a-input size="large" placeholder="账户: admin" v-model:value="form.fieldA"/>
        </a-form-item>
        <a-form-item>
            <a-input size="large" placeholder="密码: admin or ant.design" v-model:value="form.fieldB"/>
        </a-form-item>
        <a-form-item style="margin-top:24px">
            <a-button
            size="large"
            type="primary"
            htmlType="submit"
            class="login-button"
            :loading="state.loginBtn"
            :disabled="state.loginBtn"
            @click="login"
            >确定</a-button>
        </a-form-item>
    </a-form>
  </div>
</template>

<script>
import {defineComponent, ref, reactive} from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
    setup(){
        const form = reactive({
            layout: 'vertical'
        })
        const state = reactive({
            loginBtn: false
        })
        const customActiveKey = ref({})
        const router = useRouter()
        const login = function () {
            router.push('/dashboard')
        }
        return{form,state,customActiveKey, login }
    },
})
</script>

<style lang="less" scoped>
.user-layout-login {
  label {
    font-size: 14px;
  }

  .getCaptcha {
    display: block;
    width: 100%;
    height: 40px;
  }

  .forge-password {
    font-size: 14px;
  }

  button.login-button {
    padding: 0 15px;
    font-size: 16px;
    height: 40px;
    width: 100%;
  }

  .user-login-other {
    text-align: left;
    margin-top: 24px;
    line-height: 22px;

    .item-icon {
      font-size: 24px;
      color: rgba(0, 0, 0, 0.2);
      margin-left: 16px;
      vertical-align: middle;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: #1890ff;
      }
    }

    .register {
      float: right;
    }
  }
}
</style>
