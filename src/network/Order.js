import {request} from "./request";

export function showOrder(orderId) {
    return request({
        url: '/shidao/fore/showOrder',
        method: 'get',
        params: {
            orderId
        }
    })
}
export function confirmC(orderId,price,suggestTime) {
    return request({
        url: '/shidao/fore/confirm',
        method: 'get',
        params: {
            orderId,
            price,
            suggestTime
        }
    })
}
export function confirmQ(orderQId,price,suggestTime) {
    return request({
        url: '/shidao/fore/confirm_q',
        method: 'get',
        params: {
            orderQId,
            price,
            suggestTime
        }
    })
}
export function showOrderQ(orderQId) {
    return request({
        url: '/shidao/fore/showOrder_q',
        method: 'get',
        params: {
            orderQId
        }
    })
}
export function myOrder(order_status,identity) {
    return request({
        url: '/shidao/fore/myOrder',
        method: 'get',
        params: {
            order_status,
            identity
        }
    })
}
export function want(classInfo_id) {
    return request({
        url: '/shidao/fore/want',
        method: 'get',
        params: {
            classInfo_id
        }
    })
}
export function wantQ(question_id) {
    return request({
        url: '/shidao/fore/wantQ',
        method: 'get',
        params: {
            question_id
        }
    })
}
export function postEvaluation(content,orderId) {
    return request({
        url: '/shidao/fore/postEvaluation',
        method: 'get',
        params: {
            content,
            orderId
        }
    })
}