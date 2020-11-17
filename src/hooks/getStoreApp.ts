import { useStore } from 'vuex'
import { computed } from 'vue'
import { AppInterface } from '@/store/modules/app.ts'

export const getStoreCollapsed = ()=>{
    const store = useStore<AppInterface>()
    const collapsed = computed(()=>store.getters.getCollapsed)
    const setCollapsed = ()=>{
        store.commit('setCollapsed')
    }
    return {
        collapsed,
        setCollapsed
    }
}