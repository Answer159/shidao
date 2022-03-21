import { request } from './request';

export function ClassSearch(keyword,categoryId, pageNum) {
    return request({
        url: '/shidao/fore/searchClassInfo',
        method: 'get',
        params: {
            keyword,
            categoryId,
            pageNum,
        }
    })
}
export function QuestionSearch(keyword,categoryId, pageNum) {
    return request({
        url: '/shidao/fore/searchQuestion',
        method: 'get',
        params: {
            keyword,
            categoryId,
            pageNum,
        }
    })
}
export function HelpSearch(keyword, pageNum) {
    return request({
        url: '/shidao/fore/searchQuestionInfo',
        method: 'get',
        params: {
            keyword,
            pageNum
        }
    })
}

export function UserSearch(keyword,categoryId, pageNum) {
    return request({
        url: '/shidao/userInfo/searchUserInfo',
        method: 'get',
        params: {
            keyword,
            categoryId,
            pageNum
        }
    })
}

export function ClassSort(sort, keyword,categoryId, pageNum) {
    return request({
        url: '/shidao/fore/sortClassInfo',
        method: 'get',
        params: {
            sort,
            keyword,
            categoryId,
            pageNum
        }
    })
}
export function QuestionSort(sort, keyword,categoryId, pageNum) {
    return request({
        url: '/shidao/question/sortQuestion',
        method: 'get',
        params: {
            sort,
            keyword,
            categoryId,
            pageNum
        }
    })
}