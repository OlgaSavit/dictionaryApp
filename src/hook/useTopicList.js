import {useDispatch, useSelector} from 'react-redux'
import {useCallback, useEffect, useState} from 'react'
import {appendAllTopicList, getAllTopicList} from '@/store/slices/topicSlice'
import {useFocusEffect} from '@react-navigation/native'

const initialPage = 1
const initialPerPage = 15

const useTopicList = myTopic => {
  const dispatch = useDispatch()
  const {allTopicList, allTopicListMeta} = useSelector(
    state => state.topic || {}
  )
  const [page, setPage] = useState(initialPage)
  const [isLoading, setIsLoading] = useState(false)
  const [isFirstTime, setIsFirstTime] = useState(true)
  const fetchAllTopicList = data => {
    isFirstTime && setIsLoading(true)
    dispatch(getAllTopicList(data)).finally(() => {
      setIsLoading(false)
    })
  }
  const appendTopicList = data => {
    dispatch(appendAllTopicList(data))
  }
  useFocusEffect(
    useCallback(() => {
      setPage(1)
      fetchAllTopicList({page: 1, perPage: initialPerPage, onlyMy: myTopic})
      setIsFirstTime(false)
    }, [isFirstTime])
  )
  const onUpdateTopicList = () => {
    setPage(1)
    fetchAllTopicList({page: 1, perPage: initialPerPage, onlyMy: myTopic})
  }
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
  return {allTopicList, isLoading, onChangePage, onUpdateTopicList}
}
export {useTopicList}
