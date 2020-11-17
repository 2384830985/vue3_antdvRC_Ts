import { StoreOptions } from 'vuex';
export interface AppInterface{
    sideCollapsed: boolean;
}

const app: StoreOptions<AppInterface> = {
    state: {
        sideCollapsed: false,
    },
    getters: {
        getCollapsed: (state: AppInterface)=> state.sideCollapsed
    },
    mutations: {
        setCollapsed(state: AppInterface){
            state.sideCollapsed = !state.sideCollapsed
        }
    },
}

export default app