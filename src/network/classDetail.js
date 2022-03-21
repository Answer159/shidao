import { request } from './request';

export function GetClassData(classInfo_id) {
    return request({
        url: "/shidao/fore/showClassInfo",
        method: "get",
        params: {
            classInfo_id
        }
    })
}
export function GetFullClass(id) {
    return request({
        url: "/shidao/classInfo/GetFullClass",
        method: "get",
        params: {
            id
        }
    })
}
export function recommendClass() {
    return request({
        url: "/shidao/classInfo/recommendClassInfo",
        method: "get",
    })
}
export function recommendQuestion() {
    return request({
        url: "/shidao/question/recommendQuestion",
        method: "get",
    })
}
export function GetFullQuestion(id) {
    return request({
        url: "/shidao/question/GetFullQuestion",
        method: "get",
        params: {
            id
        }
    })
}
export function GetQuestionData(question_id) {
    return request({
        url: "/shidao/fore/showQuestion",
        method: "get",
        params: {
            question_id
        }
    })
}