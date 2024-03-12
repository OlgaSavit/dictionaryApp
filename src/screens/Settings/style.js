import {StyleSheet} from 'react-native';
import Colors from '@/constants/theme';
export const stylessheet = theme =>
  StyleSheet.create({
    mainWrapper: {
      paddingHorizontal: 16,
    },
    wrapperList: {},
    wrapperItem: {
      position: 'relative',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      paddingVertical: 16,
      borderBottomWidth: 1.5,
      borderBottomColor: Colors[theme]?.colors.dark_30,
      paddingRight: 32,
    },
    wrapperItemRight: {
      paddingRight: 0,
    },
    exitText: {
      fontSize: 16,
      lineHeight: 22,
      fontWeight: '500',
      color: Colors[theme]?.colors.red,
      textAlign: 'center',
      marginVertical: 24,
    },
    wrapperArrowRight: {
      position: 'absolute',
      right: 0,
    },
    title: {
      fontSize: 16,
      fontWeight: '500',
      lineHeight: 22,
      color: Colors[theme]?.colors.dark,
    },
    valueText: {
      fontSize: 16,
      fontWeight: '500',
      lineHeight: 22,
      color: Colors[theme]?.colors.dark_300,
    },
  });
