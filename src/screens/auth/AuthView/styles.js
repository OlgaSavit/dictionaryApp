import {StyleSheet} from 'react-native'
import Colors from '@/constants/theme'
export const stylessheet = theme =>
  StyleSheet.create({
    mainWrapper: {
      flex: 1,
      paddingHorizontal: 16
    },
    wrapperContent: {
      flex: 1,
      justifyContent: 'center'
    }
  })
