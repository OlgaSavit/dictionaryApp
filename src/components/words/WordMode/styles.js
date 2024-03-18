import Colors from '@/constants/theme'
import {StyleSheet} from 'react-native'

export const stylessheet = (theme, count) =>
  StyleSheet.create({
    tabsContainer: {
      backgroundColor: Colors[theme].colors.appBackground
    },
    tabsOverlay: {
      position: 'absolute',
      top: '100%',
      left: 0,
      height: '100%',
      width: '100%',
      backgroundColor: Colors[theme].colors.dark_30
    },
    wrapperTabs: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTopRightRadius: 24,
      borderTopLeftRadius: 24,
      borderWidth: 1.5,
      borderColor: Colors[theme].colors.transparent,
      backgroundColor: Colors[theme].colors.dark_30,
      paddingHorizontal: 16,
      paddingVertical: 8,
      gap: 8
    },
    wrapperItem: {
      alignItems: 'center',
      // flex: 1 / count
      paddingVertical: 7
    },
    label: {
      fontSize: 12,
      lineHeight: 14,
      fontWeight: '600',
      color: Colors[theme].colors.inputPlaceholderColor
    },
    labelActive: {
      color: Colors[theme].colors.dark
    },
    parentWrapper: {
      // paddingTop: 10,
      position: 'relative'
    },
    wrapperIndicator: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 14,
      height: 14,
      borderRadius: 100,
      backgroundColor: Colors[theme].colors.dark_30,
      position: 'absolute',
      right: -5,
      top: -5
    },
    circleIndicator: {
      width: 10,
      height: 10,
      borderRadius: 100,
      backgroundColor: Colors[theme].colors.yellow
    }
  })
