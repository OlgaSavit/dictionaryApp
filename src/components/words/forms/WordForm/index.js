import React from 'react'
import {stylessheet} from './styles'
import {Text, View} from 'react-native'
import {useTranslation} from 'react-i18next'
import {Formik} from 'formik'
import Input from '@/components/Input'
import CustomButton from '@/components/Button'
import {useSelector} from 'react-redux'
import DropDown from '@/components/DropDown'
import {useWordForm} from '@/components/words/forms/WordForm/useWordForm'

const initialValues = {
  currentTopicId: null,
  currentWord: null
}

const WordForm = props => {
  const {currentTopicId, currentWord} = {...initialValues, ...props}
  const {theme} = useSelector(store => store.theme || {})
  const {t} = useTranslation()
  const styles = stylessheet(theme)
  const {
    values,
    dataErrors,
    errors,
    isFormChanged,
    isValidForm,
    isLoading,
    langDirect,
    handleSubmit,
    onChangeInput,
    goToScreen
  } = useWordForm({currentWord, currentTopicId})
  return (
    <View style={styles.mainWrapper}>
      <Formik onSubmit={handleSubmit}>
        <>
          <View style={styles.wrapperContent}>
            <View style={styles.wrapperInput}>
              <Input
                errorText={
                  dataErrors?.word ? dataErrors?.word : t(errors?.word)
                }
                isError={
                  (!!errors?.word && isFormChanged.word) || dataErrors?.word
                }
                testID={'word'}
                name={'word'}
                label={`${t('fields.word')}*`}
                value={values.word}
                onChangeText={e => {
                  onChangeInput({value: e, name: 'word'})
                }}
              />
            </View>
            <View style={styles.wrapperInput}>
              <Input
                errorText={
                  dataErrors?.wordTranslate
                    ? dataErrors?.wordTranslate
                    : t(errors?.wordTranslate)
                }
                isError={
                  (!!errors?.wordTranslate && isFormChanged.wordTranslate) ||
                  dataErrors?.wordTranslate
                }
                testID={'wordTranslate'}
                name={'wordTranslate'}
                label={`${t('fields.wordTranslate')}*`}
                value={values.wordTranslate}
                onChangeText={e => {
                  onChangeInput({value: e, name: 'wordTranslate'})
                }}
              />
            </View>
            <View style={styles.wrapperInput}>
              <Input
                errorText={
                  dataErrors?.wordPhonetic
                    ? dataErrors?.wordPhonetic
                    : t(errors?.wordPhonetic)
                }
                isError={
                  (!!errors?.wordPhonetic && isFormChanged.wordPhonetic) ||
                  dataErrors?.wordPhonetic
                }
                testID={'wordPhonetic'}
                name={'wordPhonetic'}
                label={`${t('fields.wordPhonetic')}`}
                value={values.wordPhonetic}
                onChangeText={e => {
                  onChangeInput({value: e, name: 'wordPhonetic'})
                }}
              />
            </View>
            <View style={styles.wrapperInput}>
              <DropDown
                disabled={true}
                selectedValue={values.langDirect}
                onSelectValue={val => {
                  onChangeInput({value: val?.value, name: 'langDirect'})
                }}
                items={[{label: langDirect, value: langDirect}]}
              />
            </View>
            <View style={styles.wrapperInput}>
              <DropDown
                placeholder={t('fields.topicList')}
                onSelectValue={val => {
                  onChangeInput({value: val?.value, name: 'langDirect'})
                }}
                items={[]}
              />
            </View>
          </View>
          <CustomButton
            disabled={!isValidForm || isLoading}
            onPress={() => handleSubmit(values)}>
            <Text>Save</Text>
          </CustomButton>
        </>
      </Formik>
    </View>
  )
}
export default WordForm
