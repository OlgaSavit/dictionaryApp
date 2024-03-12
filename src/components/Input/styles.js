import {StyleSheet} from 'react-native'
import Colors from '@/constants/theme'
export const stylessheet = theme =>
  StyleSheet.create({
    wrapperInput: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth: 1,
      borderColor: Colors[theme]?.colors.gray,
      backgroundColor: Colors[theme]?.colors.commonWhite
    },
    wrapperInputDisabled: {
      opacity: 0.5
    },
    wrapperInputError: {
      borderColor: Colors[theme]?.colors.red
    },
    label: {
      fontSize: 12,
      marginBottom: 4
    },
    input: {
      flex: 1,
      paddingVertical: 10,
      paddingHorizontal: 12,
      maxHeight: 40,
      backgroundColor: Colors[theme]?.colors.commonWhite,
      color: Colors[theme]?.colors.dark
    },
    wrapperInputFocus: {
      borderColor: Colors[theme]?.colors.dark
    },
    togglePasswordIcon: {
      paddingRight: 10,
      paddingLeft: 5,
      backgroundColor: Colors[theme]?.colors.commonWhite
    },
    textInputStyle: {
      fontSize: 14,
      color: Colors[theme]?.colors.dark
    },
    textInputStyleError: {
      color: Colors[theme]?.colors.red
    },
    errorText: {
      fontSize: 10,
      color: Colors[theme]?.colors.red,
      lineHeight: 14,
      marginTop: 2
    }
  })
