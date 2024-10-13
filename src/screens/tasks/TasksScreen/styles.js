import {StyleSheet} from 'react-native'
export const stylessheet = () =>
  StyleSheet.create({
    mainWrapper: {
      flex: 1,
      paddingHorizontal: 16
    },
    wrapperAddIcon: {
      width: 40,
      height: 40,
      transform: [{rotateZ: '45deg'}]
    },
    plusBtnText: {
      fontSize: 30,
      alignItems: 'center',
      alignSelf: 'center'
    }
  })
