import * as Yup from 'yup'

const getValidationRules = () => {
  return Yup.object().shape({
    email: Yup.string()
      .email('validationErrors.emailIncorrect')
      .required('validationErrors.requiredField'),
    password: Yup.string().required('validationErrors.requiredField')
  })
}

export {getValidationRules}
