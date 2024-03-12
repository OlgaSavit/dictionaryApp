import {StyleSheet} from 'react-native'
import Colors from '@/constants/theme'
export const stylessheet = theme =>
  StyleSheet.create({
    mainWrapper: {
      paddingHorizontal: 16
    },
    wrapperList: {},
    wrapperItem: {
      paddingVertical: 16,
      borderBottomWidth: 1.5,
      borderBottomColor: Colors[theme].colors.dark_30
    }
  })
