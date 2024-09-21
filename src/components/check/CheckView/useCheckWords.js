import {useEffect, useMemo, useState} from 'react'
import {sampleSize, shuffle} from 'lodash'
import {ToastTypes} from '@/constants/general'
import {userChangeWordStatusRequest} from '@/api/requests/word'
import {useToast} from 'react-native-toast-notifications'
import {useDispatch, useSelector} from 'react-redux'
import {setCurrentTopicAction} from '@/store/slices/topicSlice'

const useCheckWords = () => {
  const dispatch = useDispatch()
  const {currentTopic} = useSelector(store => store.topic || {})
  const [currentList, setCurrentList] = useState(currentTopic?.words)
  const [activeInd, setActiveInd] = useState(0)
  const [optionsList, setOptionsList] = useState([])
  const [isCorrect, setIsCorrect] = useState(null)
  const toast = useToast()
  const onPressNext = current => {
    if (current + 1 < currentList?.length) {
      setActiveInd(current + 1)
      resetSelectedAnswer()
    }
  }
  const onPressPrev = current => {
    if (current > 0) {
      setActiveInd(current - 1)
      resetSelectedAnswer()
    }
  }
  const isDisabledPrev = useMemo(() => {
    return activeInd === 0
  }, [activeInd])
  const isDisabledNext = useMemo(() => {
    return activeInd === currentList.length - 1
  }, [activeInd, currentList])
  const currentWord = useMemo(() => {
    return currentList[activeInd]
  }, [currentList, activeInd])

  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const resetSelectedAnswer = () => {
    setSelectedAnswer(null)
    setIsCorrect(null)
  }

  const onSelectAnswer = value => {
    setSelectedAnswer(value)
  }
  const onCheckAnswer = () => {
    if (selectedAnswer.value === currentWord.id) {
      onChangeWordStatus(currentWord, true)
      setIsCorrect(true)
    } else {
      setIsCorrect(false)
      onChangeWordStatus(currentWord, false)
    }
  }
  function onChangeWordStatus(word, isCorrect) {
    let newStatus = isCorrect ? 'translate' : 'new'
    onChangeStatusAction({word, status: newStatus})
  }
  const onChangeStatusAction = async ({word, status}) => {
    try {
      const response = await userChangeWordStatusRequest({
        wordId: word.id,
        status
      })
      if (response.status === 200) {
        changedListByStatus(word, status)
      }
    } catch (err) {
      toast.show(err?.message, {type: ToastTypes.danger})
    }
  }
  function changedListByStatus(word, newStatus) {
    let newItem = {...word, status: newStatus}
    let newArr = currentList?.map(item => {
      if (item.id === currentWord.id) {
        return newItem
      }
      return item
    })
    const newTopic = {...currentTopic, words: newArr}
    dispatch(setCurrentTopicAction({data: newTopic}))
  }
  useEffect(() => {
    getTranslationOptions(currentWord, currentList)
  }, [currentWord, currentList])
  useEffect(() => {
    setCurrentList(currentTopic?.words)
  }, [currentTopic])

  function normalizeListToSelect(list) {
    return (
      list?.map(item => {
        return {
          value: item.id,
          label: item.wordTranslate
        }
      }) || []
    )
  }

  function getTranslationOptions(currentWord, list) {
    let filterArr = list?.filter(item => item.id !== currentWord.id)
    let randomOptionsArr = sampleSize(filterArr, 4)
    let options = [currentWord, ...randomOptionsArr]
    setOptionsList(normalizeListToSelect(shuffle(options)))
  }
  return {
    optionsList,
    onPressNext,
    onPressPrev,
    isDisabledPrev,
    isDisabledNext,
    activeInd,
    currentWord,
    onSelectAnswer,
    selectedAnswer,
    onCheckAnswer,
    isCorrect,
    currentList
  }
}
export {useCheckWords}
