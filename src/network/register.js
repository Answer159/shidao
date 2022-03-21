import { request } from "./request";
import qs from "qs"

export function submit(data) {
    return request({
        url: "/shidao/fore/register",
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
export function editUser(data) {
    return request({
        url: "/shidao/fore/editUser",
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