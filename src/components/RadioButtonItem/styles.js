import Colors from '@/constants/theme'
import {StyleSheet} from 'react-native'

export const stylessheet = (theme, active) =>
  StyleSheet.create({
    mainWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    styles: {
      fontSize: 16,
      lineHeight: 22,
      color: Colors[theme].colors.dark
    },
    wrapperItem: {
      width: 20,
      height: 20,
      borderRadius: 100,
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: active
        ? Colors[theme].colors.yellow
        : Colors[theme].colors.dark_30,
      backgroundColor: active
        ? Colors[theme].colors.yellow
        : Colors[theme].colors.transparent
    },
    activeItem: {
      borderRadius: 100,
      width: 8,
      height: 8,
      backgroundColor: Colors[theme].colors.white
    },
    label: {
      fontSize: 16,
      lineHeight: 22,
      color: Colors[theme].colors.dark
    }
  })
