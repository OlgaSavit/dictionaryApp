import React from 'react'
import {stylessheet} from './styles'
import {Text, TouchableOpacity, View} from 'react-native'
import {useTranslation} from 'react-i18next'
import {Formik} from 'formik'
import Input from '@/components/Input'
import CustomButton from '@/components/Button'
import {useSignIn} from './useSignIn'
import {useSelector} from 'react-redux'
import routerNameList from '@/navigation/routerNameList'

const SignInForm = props => {
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
    handleSubmit,
    onChangeInput,
    goToScreen
  } = useSignIn()
  return (
    <View style={styles.mainWrapper}>
      <Formik onSubmit={handleSubmit}>
        <>
          <View style={styles.wrapperContent}>
            <View style={styles.wrapperInput}>
              <Input
                errorText={
                  dataErrors?.email ? dataErrors?.email : t(errors?.email)
                }
                isError={
                  (!!errors?.email && isFormChanged.email) || dataErrors?.email
                }
                testID={'email'}
                name={'email'}
                label={`${t('fields.email')}*`}
                value={values.email}
                onChangeText={e => {
                  onChangeInput({value: e, name: 'email'})
                }}
              />
            </View>
            <View style={styles.wrapperInput}>
              <Input
                isPassword={true}
                errorText={
                  dataErrors?.password
                    ? dataErrors?.password
                    : t(errors?.password, {count: 6})
                }
                isError={
                  (!!errors?.password && isFormChanged.password) ||
                  dataErrors?.password
                }
                testID={'password'}
                name={'password'}
                label={`${t('fields.password')}*`}
                value={values.password}
                onChangeText={e => {
                  onChangeInput({value: e, name: 'password'})
                }}
              />
            </View>
            <View style={styles.wrapperLinkBtn}>
              <TouchableOpacity onPress={() => goToScreen()}>
                <Text style={styles.linkBtn}>{t('texts.forgotPassword')}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <CustomButton
            testID={'signInBtn'}
            disabled={!isValidForm || isLoading}
            onPress={() => handleSubmit(values)}>
            <Text>{t('auth.signInLabel')}</Text>
          </CustomButton>
          <View style={styles.wrapperBottomBlock}>
            <View style={styles.wrapperLinkBtn}>
              <TouchableOpacity
                onPress={() => goToScreen(routerNameList?.signUp)}>
                <Text style={styles.linkBtn}>{t('auth.signUpLabel')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      </Formik>
    </View>
  )
}
export default SignInForm
