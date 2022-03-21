import { request } from "./request";

export function myClass() {
    return request({
        url: '/shidao/fore/myClassInfo',
        method: 'get',
    })
}
export function myQuestion() {
    return request({
        url: '/shidao/fore/myQuestion',
        method: 'get',
    })
}
export function showClassCollection() {
    return request({
        url: '/shidao/fore/showClassCollection',
        method: 'get',
    })
}
export function showQuestionCollection() {
    return request({
        url: '/shidao/fore/showQuestionCollection',
        method: 'get',
    })
}