import Icon from '../../../components/Icon'
import {stylessheet} from './styles'
import Colors from '../../../constants/theme'
import {useSelector} from 'react-redux'
import React, {useCallback} from 'react'
import {View, Text} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import CustomButton, {ButtonTypes} from '../../../components/Button'
const initialProps = {
  showBack: true,
  showNext: false,
  title: '',
  customLeftBtn: null,
  customRightBtn: null,
  customTitle: null,
  titleCount: null,
  onBackPress: null,
  onNextPress: () => {}
}
const TopNavigation = props => {
  const navigation = useNavigation()
  const {
    showBack,
    showNext,
    title,
    customTitle,
    customLeftBtn,
    customRightBtn,
    titleCount,
    onBackPress,
    onNextPress
  } = {
    ...initialProps,
    ...props
  }
  const {theme} = useSelector(store => store.theme)

  const handleBackPress = useCallback(() => {
    if (
      typeof onBackPress !== 'undefined' &&
      typeof onBackPress === 'function'
    ) {
      onBackPress()
    } else {
      navigation.goBack()
    }
  }, [onBackPress])

  const styles = stylessheet(theme)
  return (
    <View style={styles.wrapperTopNavigation}>
      <View style={styles.wrapperLeftBlock}>
        {showBack && (
          <CustomButton
            onPress={handleBackPress}
            btnType={ButtonTypes.roundBtn}>
            <Icon
              color={Colors[theme].colors.dark_300}
              size={14}
              name={'chevron-left'}
            />
          </CustomButton>
        )}
        {customLeftBtn && customLeftBtn}
      </View>
      {customTitle ? (
        customTitle
      ) : (
        <View style={styles.wrapperCenterBlock}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          {titleCount && (
            <View style={styles.counterWrapper}>
              <Text numberOfLines={1} style={styles.countText}>
                {titleCount}
              </Text>
            </View>
          )}
        </View>
      )}
      <View style={styles.wrapperRightBlock}>
        {showNext && (
          <CustomButton onPress={onNextPress} btnType={ButtonTypes.roundBtn}>
            <Icon
              color={Colors[theme].colors.dark_300}
              size={14}
              name={'chevron-right'}
            />
          </CustomButton>
        )}
        {customRightBtn && customRightBtn}
      </View>
    </View>
  )
}
export default TopNavigation
