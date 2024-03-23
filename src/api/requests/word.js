import http from '../index'

export const createWordRequest = data => http.post(`/dictionary/words`, data)
export const userChangeWordStatusRequest = ({wordId, status}) =>
  http.post(`/dictionary/user/words/${wordId}`, {status})
