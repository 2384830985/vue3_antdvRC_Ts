<template>
    <div>
        <div class="table-page-search-wrapper">
            <a-form layout="inline">
                <a-row :gutter="48">
                    <a-col :md="8" :sm="24">
                        <a-form-item label="规则编号">
                            <a-input v-model="queryParam.id" placeholder=""/>
                        </a-form-item>
                    </a-col>
                    <a-col :md="8" :sm="24">
                        <a-form-item label="使用状态">
                            <a-select v-model="queryParam.status" placeholder="请选择" default-value="0">
                                <a-select-option value="0">全部</a-select-option>
                                <a-select-option value="1">关闭</a-select-option>
                                <a-select-option value="2">运行中</a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-col>
                    <template v-if="advanced">
                        <a-col :md="8" :sm="24">
                            <a-form-item label="调用次数">
                                <a-input-number v-model="queryParam.callNo" style="width: 100%"/>
                            </a-form-item>
                        </a-col>
                        <a-col :md="8" :sm="24">
                            <a-form-item label="更新日期">
                                <a-date-picker v-model="queryParam.date" style="width: 100%" placeholder="请输入更新日期"/>
                            </a-form-item>
                        </a-col>
                        <a-col :md="8" :sm="24">
                            <a-form-item label="使用状态">
                                <a-select v-model="queryParam.useStatus" placeholder="请选择" default-value="0">
                                    <a-select-option value="0">全部</a-select-option>
                                    <a-select-option value="1">关闭</a-select-option>
                                    <a-select-option value="2">运行中</a-select-option>
                                </a-select>
                            </a-form-item>
                        </a-col>
                        <a-col :md="8" :sm="24">
                            <a-form-item label="使用状态">
                                <a-select placeholder="请选择" default-value="0">
                                    <a-select-option value="0">全部</a-select-option>
                                    <a-select-option value="1">关闭</a-select-option>
                                    <a-select-option value="2">运行中</a-select-option>
                                </a-select>
                            </a-form-item>
                        </a-col>
                    </template>
                    <a-col :md="!advanced && 8 || 24" :sm="24">
            <span class="table-page-search-submitButtons" :style="advanced && { float: 'right', overflow: 'hidden' } || {} ">
              <a-button type="primary" @click="$refs.table.refresh(true)">查询</a-button>
              <a-button style="margin-left: 8px" @click="() => queryParam = {}">重置</a-button>
              <a @click="toggleAdvanced" style="margin-left: 8px">
                {{ advanced ? '收起' : '展开' }}
                  <DownOutlined v-if="!advanced" />
                  <UpOutlined v-else />
              </a>
            </span>
                    </a-col>
                </a-row>
            </a-form>
        </div>
        <s-table :columns="columns" :data="data" ref="table" bordered>
            <template #name="{text:{record}}">
                <a>{{ record.age }}</a>
            </template>
        </s-table>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import sTable from '@/components/table/table.vue'
import { DownOutlined, UpOutlined } from '@ant-design/icons-vue'
import {fromList} from "@/api/form";
import { Page } from '@/api/form.ts'
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    slots: { customRender: 'name' },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 80,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address 1',
    ellipsis: true,
  },
  {
    title: 'Long Column Long Column Long Column',
    dataIndex: 'address',
    key: 'address 2',
    ellipsis: true,
  },
  {
    title: 'Long Column Long Column',
    dataIndex: 'address',
    key: 'address 3',
    ellipsis: true,
  },
  {
    title: 'Long Column',
    dataIndex: 'address',
    key: 'address 4',
    ellipsis: true,
  },
];

export default defineComponent({
    components: {
        sTable,
        DownOutlined,
        UpOutlined
    },
    setup(){
        const advanced = ref(false)
        const queryParam = reactive({
            id: '',
            status: '0',
            callNo: 1,
        })
        const toggleAdvanced = ()=>{
            advanced.value = !advanced.value
        }
        const data = (option: Page)=>{
            console.log(option)
            console.log(queryParam)
            return fromList(Object.assign({},option,queryParam))
        .then((res: unknown)=>res)
        }
        return {
            queryParam,
            columns,
            data,
            advanced,
            toggleAdvanced,
        }
    }
})
</script>

<style >

</style>
