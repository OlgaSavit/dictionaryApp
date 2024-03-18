import http from '../index'

export const getAllTopicRequest = ({
  page = 1,
  perPage = 10,
  langDirect = 'en-uk',
  search,
  onlyMy
}) =>
  http.get('/dictionary/topics', {
    params: {page, perPage, langDirect, search, onlyMy}
  })

export const getWordsByTopicRequest = ({topicId, langDirect = 'en-uk'}) =>
  http.get(`/dictionary/topics/${topicId}`, {
    params: {langDirect}
  })

export const createTopicRequest = data => http.post(`/dictionary/topics`, data)
