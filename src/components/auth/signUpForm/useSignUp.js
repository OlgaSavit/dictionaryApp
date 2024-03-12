import {useDispatch} from 'react-redux'
import {useNavigation} from '@react-navigation/native'
import {useEffect, useState} from 'react'
import {useFormik} from 'formik'
import {getValidationRules} from './validation'
import routerNameList from '@/navigation/routerNameList'
import {useTranslation} from 'react-i18next'
import {userSignUpRequest} from '@/api/requests/auth'
import {useToast} from 'react-native-toast-notifications'

const useSignUp = () => {
  const {t} = useTranslation()
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const toast = useToast()
  const formikInitialValues = {
    username: '',
    email: '',
    password: '',
    confirm_password: ''
  }
  const [isFormChanged, setIsFormChanged] = useState({
    username: false,
    email: false,
    password: false,
    confirm_password: false
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
      console.log('val', values)
      const formData = {
        name: values?.username,
        email: values.email,
        password: values.password,
        passwordConfirmation: values.confirm_password
      }
      try {
        setIsLoading(true)
        let resp = await userSignUpRequest(formData)
        if (resp?.status === 201) {
          toast.show('Register is succes')
          if (resp?.errors?.length) {
            toast.show('Error')
          } else {
            toast.show('Success register')
            navigation.navigate(routerNameList.signIn)
          }
        }
      } catch (err) {
        // toast.show(err.response.data.message)
        console.log('kk1', err)
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
export {useSignUp}
