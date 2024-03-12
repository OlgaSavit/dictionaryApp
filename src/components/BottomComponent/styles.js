import Colors from '@/constants/theme'
import {StyleSheet} from 'react-native'

export const stylessheet = (theme, count) =>
  StyleSheet.create({
    bottomSheetContainerStyle: {
      backgroundColor: Colors[theme].colors.darkTransparent
    },
    bottomSheetBackgroundStyle: {
      backgroundColor: Colors[theme].colors.appBackground
    },
    bottomSheetStyle: {
      paddingHorizontal: 16,
      zIndex: 9,
      borderTopRightRadius: 16,
      borderTopLeftRadius: 16
    },
    handleIndicatorStyle: {
      backgroundColor: Colors[theme].colors.transparent
    },
    wrapperTopBlock: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16
    },
    wrapperIcon: {
      width: 40,
      height: 40,
      borderRadius: 100,
      backgroundColor: Colors[theme].colors.dark_30,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 12
    },
    title: {
      fontSize: 16,
      lineHeight: 24,
      color: Colors[theme].colors.dark,
      fontWeight: '600'
    },
    wrapperFlex: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    wrapperCloseBtn: {
      width: 40,
      height: 40,
      borderRadius: 100,
      borderWidth: 1.5,
      borderColor: Colors[theme].colors.dark_30,
      alignItems: 'center',
      justifyContent: 'center'
    },
    bottomSheetView: {
      paddingBottom: 50
    }
  })
