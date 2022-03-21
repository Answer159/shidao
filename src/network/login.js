import { request } from "./request";

export function Login(name, password) {
    return request({
        url: '/shidao/fore/login',
        method: 'get',
        params: {
            name,
            password
        }

    })
}


export function Logout() {
    return request({
        url: '/shidao/fore/logout',
        method: 'get',
    })
}