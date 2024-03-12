import {stylessheet} from './styles'
import {useSelector} from 'react-redux'
import {Text, TouchableOpacity, View} from 'react-native'

export const ButtonTypes = {
  default: 'default',
  transparent: 'transparent',
  outline: 'outline',
  link: 'link',
  roundBtn: 'roundBtn'
}
const initialProps = {
  onPress: null,
  disabled: false,
  styleContainer: {},
  mainStyleContainer: {},
  flexGrow: false,
  styleText: {},
  btnType: ButtonTypes.default,
  borderColor: null
}
const CustomButton = props => {
  const {theme} = useSelector(store => store.theme)
  const {
    children,
    onPress,
    disabled,
    styleContainer,
    styleText,
    btnType,
    mainStyleContainer,
    flexGrow,
    ...rest
  } = {
    ...initialProps,
    ...props
  }
  const styles = stylessheet(theme)

  const buttonStyles = [
    styles.container,
    btnType === ButtonTypes.transparent && styles.containerTransparent,
    btnType === ButtonTypes.outline && styles.containerTransparentWithBorder,
    btnType === ButtonTypes.link && styles.containerLink,
    btnType === ButtonTypes.roundBtn && styles.containerRoundBtn,
    styleContainer,
    disabled && btnType === ButtonTypes.default && styles.containerDisabled,
    disabled &&
      btnType !== ButtonTypes.default &&
      styles.containerDisabledOutline
  ]

  const buttonTextStyles = [
    styles.buttonText,
    btnType === ButtonTypes.default && styles.buttonDefaultText,
    btnType === ButtonTypes.transparent && {},
    btnType === ButtonTypes.outline && styles.buttonOutlineText,
    btnType === ButtonTypes.link && styles.buttonLinkText,
    btnType === ButtonTypes.roundBtn && {},

    btnType === ButtonTypes.outline &&
      disabled &&
      styles.buttonOutlineTextDisabled,
    btnType !== ButtonTypes.default &&
      disabled &&
      styles.buttonTextOutlineDisabled,
    btnType === ButtonTypes.default && styles.defaultTextStyle,
    btnType === ButtonTypes.default && disabled && styles.buttonTextDisabled,
    styleText,
    props?.styleButton ? {...props?.styleButton} : {}
  ]
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      containerStyle={
        flexGrow
          ? [styles.mainStyleContainer, mainStyleContainer]
          : mainStyleContainer
      }
      style={buttonStyles}
      {...rest}>
      {btnType === ButtonTypes.roundBtn ? (
        <View>{children}</View>
      ) : (
        <Text style={buttonTextStyles}>{children}</Text>
      )}
    </TouchableOpacity>
  )
}
export default CustomButton
