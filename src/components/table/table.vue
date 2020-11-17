<template>
    <a-table  :columns="column" :data-source="dataList"
              v-bind="$attrs"
              :loading="loading" @change="changeTable" :pagination="localPagination">
        <template v-for="item in slotsList" #[item]="text, record, index" :key="item">
            <slot :name="item" :record="record" :index="index" :text="text" />
        </template>
    </a-table>
</template>

<script lang="ts">
    import { defineComponent, onBeforeMount, reactive, PropType, ref } from 'vue'
    import { } from 'ant-design-vue'
    import { Page } from '@/api/form.ts'

    export interface PaginationInterface {
        // 当前页数
        current: number;
        // 总数据
        total: number;
        // 条数
        pageSize?: number;
    }

    export default defineComponent({
        name: 'table',
        props: {
            columns: {
                type: Array,
                require: true
            },
            pageNum: {
                type: Number as PropType<number>,
                default: 1
            },
            pageSize: {
                type: Number as PropType<number>,
                default: 10
            },
            data: {
                type: Function,
                required: true
            },
        },
        setup(prop, cxt){
            // 获取 slots key[]
            const slotsList = ref<Array<string>>(Object.keys(cxt.slots))
            // 初始化分页
            const localPagination: PaginationInterface = reactive({
                current: prop.pageNum,
                pageSize: prop.pageSize,
                total: 500
            })
            // 加载
            const loading = ref<boolean>(false)
            // 当前数据
            const dataList = ref([])
            // 当前table column
            const column = ref(prop.columns||[])

            /**
             * 加载数据方法
             * @param {Object} pagination 分页选项器
             * @param {Object} filters 过滤条件
             * @param {Object} sorter 排序条件
             */
            const changeTable = (pagination?: PaginationInterface, filters?: object[], sorter?: any )=> {
                // 分页类型根据业务判断
                const option: Page =Object.assign({
                        p: (pagination&&pagination.current) ? pagination.current: 1 ,
                        l: localPagination.pageSize,
                    },
                    (sorter && sorter.field && {
                        sortField: sorter.field
                    }),
                    (sorter && sorter.order && {
                        sortOrder: sorter.order
                    }) || {},
                    {
                        ...filters
                    }
                )
                loading.value = true
                const object = prop.data(option);
                if(object&&object.then) {
                    object.then((res: any) => {
                        loading.value = false
                        dataList.value = res
                        localPagination.current = option.p || 1;
                        if (pagination&&pagination.total>=0&&res.tota){
                            pagination.total = res.total
                        }
                    })
                }
            }

            const refresh = (bool = false)=> {
                bool && (localPagination.current = 1)
                changeTable()
            }

            // onBeforeMount
            onBeforeMount(()=>{
                changeTable()
            })

            return {
                loading,
                column,
                dataList,
                localPagination,
                changeTable,
                refresh,
                slotsList
            }
        }
    })
</script>

<style>

</style>
