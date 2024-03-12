import React, {useEffect, useState} from 'react'
import {stylessheet} from './styles'
import {Text, TextInput, TouchableOpacity, View} from 'react-native'
import Colors from '@/constants/theme'
import Icon from '@/components/Icon'
import {useTranslation} from 'react-i18next'
import theme from '@/constants/theme'
import {useSelector} from 'react-redux'
const initialProps = {
  label: '',
  name: null,
  disabled: false,
  style: {},
  wrapperStyle: {},
  renderRight: null,
  isError: false,
  isPassword: false,
  multiline: false,
  textContentType: 'name',
  keyboardType: 'default',
  isPhone: false,
  errorText: ''
}

const Input = props => {
  const {
    label,
    name,
    disabled,
    style,
    renderRight,
    isError,
    isPassword,
    multiline,
    wrapperStyle,
    textContentType,
    isPhone,
    innerRef,
    errorText,
    ...rest
  } = {
    ...initialProps,
    ...props
  }
  const {theme} = useSelector(store => store.theme || {})
  const {t} = useTranslation()
  const styles = stylessheet(theme)
  const [hidePass, setHidePass] = useState(isPassword)
  const [isFocus, setIsFocus] = useState(false)
  let inputContent
  const renderWrapperInputStyle = () => {
    if (isError) {
      return [styles.wrapperInput, styles.wrapperInputError, wrapperStyle]
    }
    if (isFocus) {
      return [styles.wrapperInput, styles.wrapperInputFocus, wrapperStyle]
    }
    return [styles.wrapperInput, wrapperStyle]
  }
  inputContent = (
    <>
      <TextInput
        onBlur={() => {
          setIsFocus(false)
        }}
        onFocus={() => {
          setIsFocus(true)
        }}
        secureTextEntry={hidePass}
        textContentType={isPassword ? 'password' : textContentType}
        style={[styles.input, style]}
        editable={!disabled}
        placeholderTextColor={Colors[theme]?.colors.gray}
        multiline={multiline}
        textAlignVertical={multiline ? 'top' : 'center'}
        ref={innerRef}
        {...rest}
      />
      {isPassword && (
        <TouchableOpacity
          style={styles.togglePasswordIcon}
          onPress={() => {
            setHidePass(!hidePass)
          }}>
          <Icon
            size={20}
            color={Colors[theme]?.colors.gray}
            name={hidePass ? 'open-no' : 'open-yes'}
          />
        </TouchableOpacity>
      )}
    </>
  )
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={
          disabled
            ? [...renderWrapperInputStyle(), styles.wrapperInputDisabled]
            : renderWrapperInputStyle()
        }>
        {inputContent}
      </View>
      {isError && errorText && (
        <Text testID={`errorText-${name}`} style={styles.errorText}>
          {errorText}
        </Text>
      )}
    </View>
  )
}
export default Input
