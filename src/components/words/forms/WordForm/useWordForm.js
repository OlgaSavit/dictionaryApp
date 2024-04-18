import {useDispatch, useSelector} from 'react-redux'
import {useNavigation} from '@react-navigation/native'
import {useEffect, useState} from 'react'
import {useFormik} from 'formik'
import {getValidationRules} from './validation'
import {useTranslation} from 'react-i18next'
import {useToast} from 'react-native-toast-notifications'
import {onInputOnlyNumber} from '@/utils/normalize'
import {ToastTypes} from '@/constants/general'
import routerNameList from '@/navigation/routerNameList'
import {
  createWordRequest,
  editWordRequest,
  wordVoiceGenerate,
  wordVoiceGenerateRequest
} from '@/api/requests/word'
import {appendAllTopicList, getAllTopicList} from '@/store/slices/topicSlice'
import _isEqual from 'lodash/isEqual'
const useWordForm = ({currentWord, topicItem}) => {
  const toast = useToast()
  const {t} = useTranslation()
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [addVoice, setAddVoice] = useState(false)
  const {langDirect} = useSelector(store => store.global || {})
  const {allTopicList, allTopicListMeta} = useSelector(
    state => state.topic || {}
  )
  const formikInitialValues = {
    word: currentWord ? currentWord?.word : '',
    wordTranslate: currentWord ? currentWord?.wordTranslate : '',
    wordPhonetic: currentWord ? currentWord?.wordPhonetic : '',
    langDirect: currentWord ? currentWord.langDirect : langDirect,
    topicIds: topicItem ? [topicItem?.id] : null
  }
  const [isFormChanged, setIsFormChanged] = useState({
    word: false,
    wordTranslate: false,
    wordPhonetic: false,
    langDirect: false
  })
  const [isLoading, setIsLoading] = useState(false)
  const [dataErrors, setDataErrors] = useState({})
  const [isValidForm, setIsValidForm] = useState(false)
  const [topicList, setTopicList] = useState([
    {value: topicItem?.id, label: topicItem.title}
  ])
  const {isValid, values, setFieldValue, validateForm, errors, setErrors} =
    useFormik({
      initialValues: formikInitialValues,
      validationSchema: getValidationRules()
    })
  useEffect(() => {
    onLoadTopicList()
  }, [])
  useEffect(() => {
    validateForm(values)
    setIsValidForm(isValid)
  }, [values, errors, isValid])
  useEffect(() => {
    let currentTopic = {value: topicItem?.id, label: topicItem.title}
    const filteredList = allTopicList?.filter(
      item => item.id !== currentTopic.value
    )
    const newList = filteredList?.map(item => {
      return {value: item?.id, label: item.title}
    })
    setTopicList([currentTopic, ...newList])
  }, [allTopicList, topicItem])

  const isDisabledBtn = () => {
    if (!isValidForm || isLoading) {
      return true
    }
    if (_isEqual(formikInitialValues, values)) {
      return true
    } else {
      return false
    }
  }
  const onChangeAddVoice = val => {
    setAddVoice(val)
  }

  const onLoadTopicList = (page = 1) => {
    dispatch(getAllTopicList({page: page, onlyMy: 1, perPage: 10}))
  }
  const onAddLoadTopicToList = () => {
    if (allTopicListMeta?.current_page + 1 <= allTopicListMeta?.last_page) {
      dispatch(
        appendAllTopicList({
          page: allTopicListMeta?.current_page + 1,
          onlyMy: 1
        })
      )
    }
  }
  const goToScreen = path => {
    if (path) {
      navigation.navigate(path)
    }
  }

  const handleSubmit = async values => {
    if (isValid) {
      const data = {
        word: values.word,
        wordTranslate: values.wordTranslate,
        wordPhonetic: values?.wordPhonetic ? values?.wordPhonetic : undefined,
        langDirect: values.langDirect,
        topicIds: values?.topicIds
      }
      try {
        setIsLoading(true)
        if (currentWord) {
          const response = await editWordRequest(data, currentWord.id)
          if (response.status === 200) {
            toast.show(t('texts.successEdit'), {
              type: ToastTypes.success
            })
            navigation.navigate(routerNameList.topicView, {
              topicId: topicItem?.id
            })
          }
        } else {
          const response = await createWordRequest(data)
          if (response.status === 201) {
            if (addVoice) {
              //TODO change when api will be changed
              // const idNewWord = response?.config.data.word
              // onWordVoiceGenerate(1663)
            } else {
              toast.show(t('words.successCreate'), {
                type: ToastTypes.success
              })
              navigation.navigate(routerNameList.topicView, {
                topicId: topicItem?.id
              })
            }
          }
        }
      } catch (err) {
        toast.show(err?.message, {type: ToastTypes.danger})
      } finally {
        setIsLoading(false)
      }
    }
  }

  const onWordVoiceGenerate = async id => {
    try {
      const response = await wordVoiceGenerateRequest(id)
      if (response.status === 200) {
        toast.show(t('words.successCreate'), {
          type: ToastTypes.success
        })
        navigation.navigate(routerNameList.topicView, {
          topicId: topicItem?.id
        })
      }
    } catch (err) {
      toast.show(err?.message, {type: ToastTypes.danger})
    }
  }
  const onChangeInput = ({value, name, isOnlyNumber = false}) => {
    let val = value
    if (isOnlyNumber) {
      val = onInputOnlyNumber(value)
    }
    setDataErrors({...dataErrors, [name]: null})
    setFieldValue([name], val)
    setIsFormChanged({...isFormChanged, [name]: true})
  }
  const onChangeMultiInput = ({items, name}) => {
    setDataErrors({...dataErrors, [name]: null})
    let values = items?.map(item => item.value)
    setFieldValue([name], values)
    setIsFormChanged({...isFormChanged, [name]: true})
  }
  return {
    values,
    dataErrors,
    errors,
    isFormChanged,
    isValidForm,
    langDirect,
    handleSubmit,
    onChangeInput,
    goToScreen,
    isLoading,
    topicList,
    onLoadTopicList,
    onAddLoadTopicToList,
    onChangeMultiInput,
    isDisabledBtn,
    onChangeAddVoice,
    addVoice
  }
}
export {useWordForm}
