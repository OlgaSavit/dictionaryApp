import {StyleSheet} from 'react-native';
import Colors from '../../constants/theme';

export const stylessheet = theme =>
  StyleSheet.create({
    layoutContainer: {
      flex: 1,
      backgroundColor: Colors[theme]?.colors.appBackground,
    },
    keyboardStyles: {
      flexGrow: 1,
      flex: 1,
    },
    scrollViewStyles: {
      flexGrow: 1,
      backgroundColor: Colors[theme]?.colors.appBackground,
    },
    bottomSheetComponentBg: {
      backgroundColor: Colors[theme]?.colors.darkTransparentBg,
      paddingBottom: 0,
    },
    flexStyle: {
      flex: 1,
    },
  });
