import { request } from './request';


export function submit(data) {
    return request({
        url: "/shidao/fore/postClassInfo",
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
export function editClass(data) {
    return request({
        url: "/shidao/fore/editClass",
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

export function postQuestion(data) {
    return request({
        url: "/shidao/fore/postQuestion",
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