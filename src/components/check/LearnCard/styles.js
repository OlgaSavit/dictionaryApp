import { StyleSheet } from "react-native";
import Colors from "@/constants/theme";

export const stylessheet = (theme) =>
  StyleSheet.create({
    mainWrapper: {
      gap: 20,
      width: "100%",
      alignItems: "center",
    },
    wrapperWord: {
      width: "100%",
      borderWidth: 1,
      borderColor: Colors[theme]?.colors.inputPlaceholderColor,
      padding: 10,
    },
    wrapperSelect: {
      width: "100%",
      zIndex: 5,
    },
    wrapperDropDown: {
      position: "relative",
      zIndex: 9,
    },
  });
