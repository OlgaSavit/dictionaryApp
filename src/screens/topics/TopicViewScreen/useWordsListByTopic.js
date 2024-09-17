import {useCallback, useEffect, useState} from 'react'
import {getWordsByTopicRequest} from '@/api/requests/topic'
import {ToastTypes, WordModeTypes} from '@/constants/general'
import {useToast} from 'react-native-toast-notifications'
import {useFocusEffect, useRoute} from '@react-navigation/native'

const useWordsListByTopic = () => {
  const toast = useToast()
  const router = useRoute()
  const {topicId} = router.params || {}
  const [topicItem, setTopicItem] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [wordMode, setWordMode] = useState(WordModeTypes.default)
  const [isFirstTime, setIsFirstTime] = useState(true)
  const fetchWordsByTopicId = async ({topicId}) => {
    isFirstTime && setIsLoading(true)
    try {
      const response = await getWordsByTopicRequest({topicId})
      if (response.status === 200) {
        setTopicItem(response?.data?.data)
      }
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
  return {isLoading, topicItem, wordMode, onChangeMode, onUpdateWordsByTopic}
}
export {useWordsListByTopic}
