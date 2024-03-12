import React from 'react'
import {stylessheet} from './styles'
import {Text, TouchableOpacity, View} from 'react-native'
import {useTranslation} from 'react-i18next'
import {Formik} from 'formik'
import Input from '@/components/Input'
import CustomButton from '@/components/Button'
import {useSignUp} from './useSignUp'
import {useSelector} from 'react-redux'
import routerNameList from '@/navigation/routerNameList'

const SignUpForm = props => {
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
  } = useSignUp()
  return (
    <View style={styles.mainWrapper}>
      <Formik onSubmit={handleSubmit}>
        <>
          <View style={styles.wrapperContent}>
            <View style={styles.wrapperInput}>
              <Input
                errorText={
                  dataErrors?.username
                    ? dataErrors?.username
                    : t(errors?.username)
                }
                isError={
                  (!!errors?.username && isFormChanged.username) ||
                  dataErrors?.username
                }
                testID={'username'}
                name={'username'}
                label={`${t('fields.username')}*`}
                value={values.username}
                onChangeText={e => {
                  onChangeInput({value: e, name: 'username'})
                }}
              />
            </View>
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
            <View style={styles.wrapperPasswordSection}>
              <View style={styles.wrapperInput}>
                <Input
                  isPassword={true}
                  errorText={
                    dataErrors?.password
                      ? dataErrors?.password
                      : t(errors?.password?.message, {
                          count: errors?.password?.count
                        })
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
              <View style={styles.wrapperInput}>
                <Input
                  isPassword={true}
                  errorText={
                    dataErrors?.confirm_password
                      ? dataErrors?.confirm_password
                      : t(errors?.confirm_password)
                  }
                  isError={
                    (!!errors?.confirm_password &&
                      isFormChanged.confirm_password) ||
                    dataErrors.confirm_password
                  }
                  testID={'confirm_password'}
                  name={'confirm_password'}
                  label={`${t('fields.confirmPassword')}*`}
                  value={values.confirm_password}
                  onChangeText={e => {
                    onChangeInput({value: e, name: 'confirm_password'})
                  }}
                />
              </View>
            </View>
          </View>
          <CustomButton
            styleContainer={styles.submitBtn}
            disabled={!isValidForm || isLoading}
            onPress={() => handleSubmit(values)}>
            <Text>{t('auth.signUpLabel')}</Text>
          </CustomButton>
          <View style={styles.wrapperLinkBtn}>
            <TouchableOpacity
              onPress={() => {
                goToScreen(routerNameList?.signIn)
              }}>
              <Text style={styles.linkBtn}>{t('auth.signInLabel')}</Text>
            </TouchableOpacity>
          </View>
        </>
      </Formik>
    </View>
  )
}
export default SignUpForm
