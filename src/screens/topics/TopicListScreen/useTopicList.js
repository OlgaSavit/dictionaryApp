import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import {appendAllTopicList, getAllTopicList} from '@/store/slices/topicSlice'

const initialPage = 1
const initialPerPage = 12

const useTopicList = () => {
  const dispatch = useDispatch()
  const {allTopicList, allTopicListMeta} = useSelector(
    state => state.topic || {}
  )
  const [page, setPage] = useState(initialPage)
  const [isLoading, setIsLoading] = useState(false)

  const fetchAllTopicList = data => {
    setIsLoading(true)
    dispatch(getAllTopicList(data)).finally(() => {
      setIsLoading(false)
    })
  }
  const appendTopicList = data => {
    dispatch(appendAllTopicList(data))
  }
  useEffect(() => {
    fetchAllTopicList({page: 1, perPage: initialPerPage})
  }, [initialPerPage])
  const onChangePage = () => {
    let newPage = page + 1
    if (!isLoading && newPage <= allTopicListMeta?.last_page) {
      appendTopicList({
        page: newPage,
        perPage: initialPerPage
      })
      setPage(newPage)
    }
  }
  return {allTopicList, isLoading, onChangePage}
}
export {useTopicList}
