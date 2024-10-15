import { StyleSheet } from "react-native";
import Colors from "@/constants/theme";

export const stylessheet = (theme) =>
  StyleSheet.create({
    wrapperBtns: {
      marginTop: 20,
      flexDirection: "row",
      justifyContent: "center",
      gap: 20,
    },
    wrapperBtn: {
      backgroundColor: Colors[theme]?.colors.blue_100,
      padding: 10,
      borderRadius: 5,
      color: Colors[theme]?.colors.commonWhite,
    },
    wrapperBtnDisabled: {
      opacity: 0.2,
    },
    wrapperBtnTxt: {
      fontSize: 16,
      color: Colors[theme]?.colors.commonWhite,
    },
    wrapperBtnCheck: {
      padding: 10,
      borderRadius: 5,
      backgroundColor: Colors[theme]?.colors.yellow,
    },
    wrapperContent: {
      zIndex: -1,
    },
    textCorrect: {
      marginTop: 20,
      textAlign: "center",
      color: Colors[theme].colors?.green,
    },
    textError: {
      marginTop: 20,
      textAlign: "center",
      color: Colors[theme].colors?.red,
    },
  });
