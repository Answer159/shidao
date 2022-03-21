import { request } from "./request";

export function GetData() {
    return request({
        url: '/shidao/fore/home',
        method: 'get',
    })
}

export function CheckLogin() {
    return request({
        url: '/shidao/fore/checkLogin',
        method: 'get'
    })
}