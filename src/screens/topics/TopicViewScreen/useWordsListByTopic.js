import {useCallback, useState} from 'react'
import {ToastTypes, WordModeTypes} from '@/constants/general'
import {useToast} from 'react-native-toast-notifications'
import {useFocusEffect, useRoute} from '@react-navigation/native'
import {useDispatch} from 'react-redux'
import {getCurrentTopic} from '@/store/slices/topicSlice'

const useWordsListByTopic = () => {
  const toast = useToast()
  const router = useRoute()
  const {topicId} = router.params || {}
  const [isLoading, setIsLoading] = useState(false)
  const [wordMode, setWordMode] = useState(WordModeTypes.default)
  const [isFirstTime, setIsFirstTime] = useState(true)
  const dispatch = useDispatch()
  const fetchWordsByTopicId = async ({topicId}) => {
    isFirstTime && setIsLoading(true)

    try {
      const response = await dispatch(getCurrentTopic({topicId}))
    } catch (err) {
      toast.show(err.message, {type: ToastTypes.danger})
    } finally {
      setIsLoading(false)
    }
  }
  useFocusEffect(
    useCallback(() => {
      fetchWordsByTopicId({topicId})
      setIsFirstTime(false)
    }, [topicId])
  )
  const onUpdateWordsByTopic = () => {
    fetchWordsByTopicId({topicId})
  }
  const onChangeMode = mode => {
    setWordMode(mode)
  }
  return {isLoading, wordMode, onChangeMode, onUpdateWordsByTopic}
}
export {useWordsListByTopic}
