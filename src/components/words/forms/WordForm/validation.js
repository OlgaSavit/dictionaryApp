import * as Yup from 'yup'

const getValidationRules = () => {
  return Yup.object().shape({
    word: Yup.string().required('validationErrors.requiredField'),
    wordTranslate: Yup.string().required('validationErrors.requiredField')
    // topicIds: Yup.string().required('validationErrors.requiredField')
  })
}

export {getValidationRules}
