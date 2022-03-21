import {request} from "./request";

export function getCategories() {
    return request({
        url: '/shidao/fore/listCategory',
        method: 'get',
    })
}
export function hisClass(id) {
    return request({
        url: '/shidao/classInfo/hisClassInfo',
        method: 'get',
        params:{
            id
        }
    })
}
export function hisQuestion(id) {
    return request({
        url: '/shidao/question/hisQuestion',
        method: 'get',
        params:{
            id
        }
    })
}
export function postImage(data) {
    return request({
        url: "/shidao/classImageInfo/postImage",
        method: "post",
        // headers: { "Content-Type": "application/json;Charset=utf-8" },
        // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        headers: { 'Content-Type': 'multipart/form-data' },
        data: data
        // data: {
        //     userInfo
        // }

    })
}
export function removeImage(path) {
    return request({
        url: '/shidao/classImageInfo/removeImage',
        method: 'get',
        params:{
            path
        }
    })
}