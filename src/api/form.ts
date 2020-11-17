import request from '@/utils/request'

const fromApi = {
    from: '/from',
    menu: '/menu'
}

export interface Page{
    p?: number;
    l?: number;
    page?: number;
    limit?: number;
}

export interface FromInterface extends Page{
    id?: string;
    key?: string;
    age?: string;
    address?: string;
    tags?: Array<string>;
    count?: number;
    anyKey?: number;
}

export interface MenuListInterface extends Page{
    id?: string;
    icon?: string;
    name: string;
    url: string;
    child?: Array<MenuListInterface>;
}

export function fromList (paramenter?: FromInterface){
    return request({
        url: fromApi.from,
        method: 'get',
        params: paramenter
        // data: paramenter
    })
}

export function menuList (paramenter?: MenuListInterface){
    return request({
        url: fromApi.menu,
        method: 'get',
        params: paramenter
    })
}
