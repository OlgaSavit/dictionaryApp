import {StyleSheet} from 'react-native'
import Colors from '@/constants/theme'

export const stylessheet = theme =>
  StyleSheet.create({
    containerDisabled: {
      backgroundColor: Colors[theme].colors.dark_30,
      color: Colors[theme].colors.dark_300
    },
    containerDisabledOutline: {
      borderColor: Colors[theme].colors.dark_30,
      borderBottomColor: Colors[theme].colors.dark_30
    },
    containerTransparent: {
      backgroundColor: Colors[theme].colors.transparent,
      color: Colors[theme].colors.dark,
      borderColor: Colors[theme].colors.transparent,
      borderRadius: 0
    },
    containerRoundBtn: {
      paddingVertical: 8,
      paddingHorizontal: 8,
      borderWidth: 1.5,
      borderRadius: 100,
      borderColor: Colors[theme].colors.dark_30,
      backgroundColor: Colors[theme].colors.transparent,
      width: 40,
      height: 40,
      alignSelf: 'flex-start',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 0
    },
    containerTransparentWithBorder: {
      backgroundColor: Colors[theme].colors.transparent,
      color: Colors[theme].colors.dark,
      borderWidth: 1.5,
      borderRadius: 100
    },
    containerLink: {
      backgroundColor: Colors[theme].colors.transparent,
      color: Colors[theme].colors.dark,
      alignSelf: 'flex-start',
      paddingHorizontal: 0,
      paddingVertical: 0,
      borderWidth: 0,
      marginBottom: 0
    },
    container: {
      borderWidth: 1.5,
      borderColor: Colors[theme].colors.transparent,
      marginBottom: 16,
      borderRadius: 100,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors[theme].colors.yellow,
      paddingHorizontal: 24,
      paddingVertical: 12
    },
    buttonText: {
      fontSize: 16,
      lineHeight: 22,
      color: Colors[theme].colors.commonBlack
    },
    buttonDefaultText: {
      // color: theme === themeTypes.dark && Colors[theme].colors.commonBlack,
    },
    buttonLinkText: {
      color: Colors[theme].colors.dark
    },
    buttonOutlineText: {
      color: Colors[theme].colors.black
    },
    buttonTextDisabled: {
      color: Colors[theme].colors.DBDTextColor
    },
    buttonOutlineTextDisabled: {
      color: Colors[theme].colors.OBDTextColor
    },
    buttonTextOutlineDisabled: {
      color: Colors[theme].colors.gray_100
    },
    defaultTextStyle: {
      color: Colors[theme].colors.commonBlack,
      fontSize: 16,
      lineHeight: 22
    },
    mainStyleContainer: {
      flexGrow: 1
    }
  })
