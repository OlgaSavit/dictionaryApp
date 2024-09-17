import * as Yup from 'yup'

const getValidationRules = () => {
  return Yup.object().shape({
    title: Yup.string().required('validationErrors.requiredField')
  })
}

export {getValidationRules}
