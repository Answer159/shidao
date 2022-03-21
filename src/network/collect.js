import { request } from './request';

export function CollectClass(class_id) {
    return request({
        url: '/shidao/fore/CollectClass',
        method: 'get',
        params: { class_id }
    })
}

export function CancelCollectClass(id) {
    return request({
        url: '/shidao/fore/cancelCollectClass',
        method: 'get',
        params: {
            id
        }
    })
}


export function CollectQuestion(question_id) {
    return request({
        url: '/shidao/fore/CollectQuestion',
        method: 'get',
        params: {question_id}
    })
}

export function CancelCollectQuestion(id) {
    return request({
        url: '/shidao/fore/cancelCollectQuestion',
        method: 'get',
        params: {id}
    })
}