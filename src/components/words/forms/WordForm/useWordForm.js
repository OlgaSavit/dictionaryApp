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
import {createWordRequest} from '@/api/requests/word'

const useWordForm = ({currentWord, currentTopicId}) => {
  const toast = useToast()
  const {t} = useTranslation()
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const {langDirect} = useSelector(store => store.global || {})
  const formikInitialValues = {
    word: currentWord ? currentWord?.word : '',
    wordTranslate: currentWord ? currentWord?.wordTranslate : '',
    wordPhonetic: currentWord ? currentWord?.wordPhonetic : '',
    langDirect: currentWord ? currentWord.langDirect : langDirect,
    topicIds: currentTopicId ? [currentTopicId] : null
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
  const {isValid, values, setFieldValue, validateForm, errors, setErrors} =
    useFormik({
      initialValues: formikInitialValues,
      validationSchema: getValidationRules()
    })
  useEffect(() => {
    validateForm(values)
    setIsValidForm(isValid)
  }, [values, errors, isValid])
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
        const response = await createWordRequest(data)
        if (response.status === 201) {
          toast.show(t('topic.successCreateTopic'), {type: ToastTypes.success})
          navigation.navigate(routerNameList.topicView, {
            topicId: currentTopicId
          })
        }
      } catch (err) {
        toast.show(err?.message, {type: ToastTypes.danger})
      } finally {
        setIsLoading(false)
      }
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
    isLoading
  }
}
export {useWordForm}
