import React from 'react'
import {stylessheet} from './styles'
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native'
import {useTranslation} from 'react-i18next'
import {Formik} from 'formik'
import Input from '@/components/Input'
import CustomButton from '@/components/Button'
import {useSelector} from 'react-redux'
import DropDown from '@/components/DropDown'
import {useWordForm} from '@/components/words/forms/WordForm/useWordForm'
import SwitchComponent from '@/components/SwitchComponent'
import Icon from '@/components/Icon'

const initialValues = {
  topicItem: null,
  currentWord: null
}

const WordForm = props => {
  const {topicItem, currentWord} = {...initialValues, ...props}
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
    onAddLoadTopicToList,
    onChangeMultiInput,
    isDisabledBtn,
    addVoice,
    onChangeAddVoice,
    goToScreen,
    onLoadTopicList,
    topicList,
    onGetTranslation,
    isTranslationLoading
  } = useWordForm({currentWord, topicItem})

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
            <View style={[styles.wrapperInput]}>
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
                inputBtn={
                  <TouchableOpacity
                    disabled={!values.word?.length}
                    onPress={() => {
                      onGetTranslation(values.word)
                    }}>
                    {isTranslationLoading ? (
                      <View style={styles.indicatorWrapper}>
                        {<ActivityIndicator />}
                      </View>
                    ) : (
                      <Icon name={'google-translate'}></Icon>
                    )}
                  </TouchableOpacity>
                }
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
            <View style={styles.wrapperDropDown}>
              <DropDown
                multiple={true}
                placeholder={t('fields.topicList')}
                selectedValue={values.topicIds}
                onSelectValue={val => {
                  onChangeMultiInput({items: val, name: 'topicIds'})
                }}
                searchable={true}
                onFetchList={onAddLoadTopicToList}
                items={topicList}
              />
            </View>
            <View style={styles.voiceBlock}>
              <Text style={styles.label}>Add voice</Text>
              <SwitchComponent
                isOn={addVoice}
                onChange={val => {
                  onChangeAddVoice(val)
                }}
              />
            </View>
          </View>
          <CustomButton
            disabled={isDisabledBtn()}
            onPress={() => handleSubmit(values)}>
            <Text>Save</Text>
          </CustomButton>
        </>
      </Formik>
    </View>
  )
}
export default WordForm
