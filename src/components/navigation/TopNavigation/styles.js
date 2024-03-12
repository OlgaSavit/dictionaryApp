import {StyleSheet} from 'react-native'
import Colors from '@/constants/theme'

export const stylessheet = theme =>
  StyleSheet.create({
    wrapperTopNavigation: {
      paddingVertical: 8,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    wrapperLeftBlock: {
      width: '27%',
      minWidth: 24
    },
    wrapperCenterBlock: {
      width: '45%',
      flexDirection: 'row',
      justifyContent: 'center'
    },
    counterWrapper: {
      marginLeft: 8,
      width: 24,
      height: 24,
      backgroundColor: Colors[theme].colors.red,
      borderRadius: 100,
      alignSelf: 'flex-start',
      alignItems: 'center',
      justifyContent: 'center'
    },
    countText: {
      fontSize: 14,
      lineHeight: 20,
      color: Colors[theme].colors.commonWhite
    },
    wrapperRightBlock: {
      width: '27%',
      minWidth: 24,
      flexDirection: 'row',
      justifyContent: 'flex-end'
    },
    title: {
      textAlign: 'center',
      fontSize: 18,
      lineHeight: 24,
      fontWeight: '600',
      color: Colors[theme].colors.dark,
      flex: 1
    },
    wrapperPhotoBlock: {
      position: 'relative',
      width: '100%',
      height: 360,
      borderBottomRightRadius: 24,
      borderBottomLeftRadius: 24,
      overflow: 'hidden',
      backgroundColor: Colors[theme].colors.white
    },
    photoStyle: {
      objectFit: 'cover',
      width: '100%',
      height: '100%',
      borderBottomRightRadius: 24,
      borderBottomLeftRadius: 24,
      // position: 'absolute',
      top: 0,
      backgroundColor: Colors[theme].colors.white
    },
    layoutStyle: {
      position: 'absolute',
      width: '100%',
      backgroundColor: 'transparent'
    },
    styleScrollView: {
      backgroundColor: 'transparent'
    },
    wrapperPhotoButtonsBlock: {
      flexDirection: 'row',
      paddingHorizontal: 16,
      paddingVertical: 8,
      justifyContent: 'space-between',
      backgroundColor: 'transparent'
    },
    bgPhotoBtn: {
      backgroundColor: Colors[theme].colors.white,
      opacity: 0.75
    }
  })
