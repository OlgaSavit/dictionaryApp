import {StyleSheet} from 'react-native'
import Colors from '@/constants/theme'
import theme from '@/constants/theme'
export const stylessheet = theme =>
  StyleSheet.create({
    mainWrapper: {
      flex: 1,
      marginTop: 12
    },
    wrapperContent: {gap: 12, flex: 1},
    wrapperPasswordSection: {
      gap: 12
    },
    inputStyle: {
      maxHeight: 40
    },
    wrapperLinkBtn: {
      marginBottom: 16,
      flexDirection: 'row',
      justifyContent: 'center'
    },
    submitBtn: {
      marginTop: 24
    },
    linkBtn: {
      textDecorationLine: 'underline'
    },
    errorText: {
      fontSize: 10,
      color: Colors[theme].colors.red
    }
  })
