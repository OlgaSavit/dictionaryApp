import React from 'react'
import {stylessheet} from './styles'
import {Text, View} from 'react-native'
import {useTranslation} from 'react-i18next'
import {Formik} from 'formik'
import Input from '@/components/Input'
import CustomButton from '@/components/Button'
import {useTopicForm} from './useTopicForm'
import {useSelector} from 'react-redux'
import DropDown from '@/components/DropDown'

const initialValues = {
  currentTopic: null
}

const TopicForm = props => {
  const {currentTopic} = {...initialValues, ...props}
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
  } = useTopicForm({currentTopic})
  return (
    <View style={styles.mainWrapper}>
      <Formik onSubmit={handleSubmit}>
        <>
          <View style={styles.wrapperContent}>
            <View style={styles.wrapperInput}>
              <Input
                errorText={
                  dataErrors?.title ? dataErrors?.title : t(errors?.title)
                }
                isError={
                  (!!errors?.title && isFormChanged.title) || dataErrors?.title
                }
                testID={'title'}
                name={'title'}
                label={`${t('fields.title')}*`}
                value={values.title}
                onChangeText={e => {
                  onChangeInput({value: e, name: 'title'})
                }}
              />
            </View>
            <View style={styles.wrapperInput}>
              <Input
                errorText={
                  dataErrors?.description
                    ? dataErrors?.description
                    : t(errors?.description)
                }
                isError={
                  (!!errors?.description && isFormChanged.description) ||
                  dataErrors?.description
                }
                testID={'description'}
                name={'description'}
                label={`${t('fields.description')}`}
                value={values.description}
                onChangeText={e => {
                  onChangeInput({value: e, name: 'description'})
                }}
                style={{minHeight: 100}}
                multiline
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
            <View style={{zIndex: -1}}>
              <Input
                errorText={
                  dataErrors?.order ? dataErrors?.order : t(errors?.order)
                }
                isError={
                  (!!errors?.order && isFormChanged.order) || dataErrors?.order
                }
                testID={'order'}
                name={'order'}
                label={`${t('fields.order')}`}
                value={values.order}
                keyboardType="number-pad"
                onChangeText={e => {
                  onChangeInput({value: e, name: 'order', isOnlyNumber: true})
                }}
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
export default TopicForm
