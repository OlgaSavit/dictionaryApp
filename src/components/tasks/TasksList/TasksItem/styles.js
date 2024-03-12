import {StyleSheet} from 'react-native'
import Colors from '@/constants/theme'
import theme from '@/constants/theme'
export const stylessheet = theme =>
  StyleSheet.create({
    mainWrapper: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 8,
      marginBottom: 20
    },
    numberText: {
      color: Colors[theme].colors.gray_100
    },
    title: {
      fontSize: 20,
      fontWeight: '600',
      flex: 1
    },
    description: {
      color: Colors[theme].colors.gray
    },
    contentWrapper: {
      flex: 1
    },
    wrapperButtons: {
      flex: 1 / 4,
      flexDirection: 'row',
      alignItems: 'center'
    },
    wrapperActionBtn: {
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
