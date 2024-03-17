import {useEffect, useState} from 'react'
import {getWordsByTopicRequest} from '@/api/requests/topic'
import {ToastTypes} from '@/constants/general'
import {useToast} from 'react-native-toast-notifications'
import {useRoute} from '@react-navigation/native'

const useWordsListByTopic = () => {
  const toast = useToast()
  const router = useRoute()
  const {topicId} = router.params || {}
  const [topicItem, setTopicItem] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchWordsByTopicId = async ({topicId}) => {
    setIsLoading(true)
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
  useEffect(() => {
    fetchWordsByTopicId({topicId})
  }, [topicId])
  return {isLoading, topicItem}
}
export {useWordsListByTopic}
