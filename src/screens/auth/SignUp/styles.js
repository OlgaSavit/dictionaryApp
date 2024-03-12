import {StyleSheet} from 'react-native'
import Colors from '@/constants/theme'
export const stylessheet = theme =>
  StyleSheet.create({
    mainWrapper: {
      paddingHorizontal: 16
    },
    wrapperSocialBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10
    },
    wrapperImg: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 80,
      height: 80,
      borderWidth: 1,
      borderColor: Colors[theme]?.colors.dark_30,
      borderRadius: 100,
      overflow: 'hidden'
    }
  })
