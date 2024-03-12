import * as Yup from 'yup'

const getValidationRules = () => {
  return Yup.object().shape({
    username: Yup.string().required('validationErrors.requiredField'),
    email: Yup.string()
      .email('validationErrors.emailIncorrect')
      .required('validationErrors.requiredField'),
    password: Yup.string()
      .required({message: 'validationErrors.requiredField'})
      .min(6, {message: 'validationErrors.shortPassword', count: 6}),
    confirm_password: Yup.string()
      .oneOf([Yup.ref('password'), null], 'validationErrors.passwordsNotMatch')
      .required('validationErrors.requiredField')
  })
}

export {getValidationRules}
