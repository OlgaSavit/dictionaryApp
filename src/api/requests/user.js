import http from '../index'

export const getUserInfoRequest = () => http.get(`/users/me/info`)
