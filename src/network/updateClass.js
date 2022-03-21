import {request} from "./request";

export function getPageData(class_id) {
    return request({
        url: "/shidao/fore/editClassPage",
        method: "get",
        params: {
            class_id
        }
    })
}

export function submitUpdate(data) {
    return request({
        url: "/shidao/fore/editClass",
        method: "post",
        headers: { 'Content-Type': 'multipart/form-data' },
        data: data
    })
}
export function editImageQuestion(data) {
    return request({
        url: "/shidao/questionImageInfo/postImage",
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
export function removeImageQuestion(path) {
    return request({
        url: '/shidao/questionImageInfo/removeImage',
        method: 'get',
        params:{
            path
        }
    })
}

export function editQuestion(data) {
    return request({
        url: "/shidao/fore/editQuestion",
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