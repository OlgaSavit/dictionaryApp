import {useDispatch} from 'react-redux'
import {useNavigation} from '@react-navigation/native'
import {useEffect, useState} from 'react'
import {useFormik} from 'formik'
import {getValidationRules} from './validation'
import routerNameList from '@/navigation/routerNameList'
import {useTranslation} from 'react-i18next'
import {useToast} from 'react-native-toast-notifications'
import {userLoginRequest} from '@/api/requests/auth'
import {setAuthStatus, setUserToken} from '@/store/slices/authSlice'
import {ToastTypes} from '@/constants/general'
import {getUserInfo} from '@/store/slices/userSlice'

const useSignIn = () => {
  const toast = useToast()
  const {t} = useTranslation()
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const formikInitialValues = {
    email: '',
    password: ''
  }
  const [isFormChanged, setIsFormChanged] = useState({
    email: false,
    password: false
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
        email: values.email,
        password: values.password
      }
      try {
        setIsLoading(true)
        let resp = await userLoginRequest(data)
        if (resp?.status === 200) {
          if (resp?.data?.token) {
            toast.show('Success login', {type: ToastTypes.success})
            dispatch(setUserToken(resp?.data?.token))
            dispatch(setAuthStatus(true))
            dispatch(getUserInfo())
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: 'PrivateScreens'
                }
              ]
            })
          }
        }
      } catch (err) {
        toast.show(err.message, {type: ToastTypes.danger})
      } finally {
        setIsLoading(false)
      }
    }
  }
  const onChangeInput = ({value, name}) => {
    setDataErrors({...dataErrors, [name]: null})
    setFieldValue([name], value)
    setIsFormChanged({...isFormChanged, [name]: true})
  }
  return {
    values,
    dataErrors,
    errors,
    isFormChanged,
    isValidForm,
    handleSubmit,
    onChangeInput,
    goToScreen,
    isLoading
  }
}
export {useSignIn}
