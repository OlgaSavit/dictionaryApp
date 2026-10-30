import {StyleSheet} from 'react-native'
export const stylessheet = () =>
  StyleSheet.create({
    title: {
      fontSize: 20,
      fontWeight: 600
    },
    wrapperBox: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    wrapperTable: {
      width: '100%',
      gap: 10,
      marginTop: 20
    },
    wrapperRow: {
      flexDirection: 'row',
      gap: 20
    },
    wrapperCol: {
      flex: 1
    },
    txt: {
      fontSize: 14
    },
    txtBold: {
      fontWeight: 600
    }
  })
