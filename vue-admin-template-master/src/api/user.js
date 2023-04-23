import request from '@/utils/request'

export const loginApi = (data) => {
    return request({
        url: '/sys/login',
        method: "post",
        data
    })
}

export const getUserInfoApi = () => {
    return request({
        url: '/sys/profile',
        method: 'post'
    })
}

export const getBaseUserInfoApi = (id) => {
    return request({
        url: `/sys/user/${id}`,
        method: "get"
    })
}

export function getInfo(token) {

}

export function logout() {

}
