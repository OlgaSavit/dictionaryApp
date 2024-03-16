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
