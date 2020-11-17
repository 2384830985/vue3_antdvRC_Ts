import request from '@/utils/request'

const userApi = {
    Login: '/auth/login'
}

export interface userAuth{
    userName: string;
    password: string;
}

export function login (paramenter: userAuth){
    return request({
        url: userApi.Login,
        method: 'post',
        data: paramenter
    })
}