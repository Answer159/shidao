import { request } from './request';


export function sendComment(content,questionId,replayId) {
    return request({
        url: "/shidao/fore/postComment",
        method: "post",
        params:{
            content,
            questionId,
            replayId
        }

    })
}
export function postEvaluation(content,orderId) {
    return request({
        url: "/shidao/fore/postEvaluation",
        method: "post",
        params:{
            content,
            orderId
        }

    })
}