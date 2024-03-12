import Colors from '@/constants/theme'
import {StyleSheet} from 'react-native'

export const stylessheet = (theme, active) =>
  StyleSheet.create({
    mainWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      gap: 16
    },
    styles: {
      fontSize: 16,
      lineHeight: 22,
      color: Colors[theme].colors.dark
    },
    thumbStyle: {
      height: 18,
      width: 18,
      borderRadius: 100,
      shadowColor: 'transparent'
    },
    track: {
      width: 44,
      height: 24,
      borderRadius: 100
    },
    labelStyle: {
      fontSize: 16,
      lineHeight: 22,
      color: Colors[theme].colors.dark,
      fontWeight: '500'
    }
  })
