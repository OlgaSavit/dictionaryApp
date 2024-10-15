import { StyleSheet } from "react-native";
import Colors from "@/constants/theme";
import theme from "@/constants/theme";

export const stylessheet = (theme) =>
  StyleSheet.create({
    mainWrapper: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      gap: 8,
      marginBottom: 10,
    },
    disabledItem: {
      opacity: 0.5,
    },
    wrapperTopBlock: {
      flexDirection: "row",
      gap: 10,
    },
    numberText: {
      fontSize: 18,
      fontWeight: "600",
      color: Colors[theme].colors.gray_100,
    },
    title: {
      fontSize: 18,
      fontWeight: "600",
      flex: 1,
      color: Colors[theme].colors.dark,
    },
    description: {
      color: Colors[theme].colors.gray,
    },
    secondaryTitle: {
      color: Colors[theme].colors.gray,
    },
    contentWrapper: {
      flex: 1,
    },
    wrapperButtons: {
      flex: 1 / 4,
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    wrapperActionBtn: {
      width: 40,
      height: 40,
      alignItems: "center",
      justifyContent: "flex-start",
    },
    wrapperCountBlock: {
      flexDirection: "row",
      alignItems: "flex-start",
      gap: 2,
    },
    countText: {
      fontSize: 16,
      color: Colors[theme].colors.gray,
    },
    countTextAll: {
      color: Colors[theme].colors.blue_100,
    },
    countTextDone: {
      color: Colors[theme].colors.green,
    },
    countTextOrange: {
      color: Colors[theme].colors.yellow,
    },
  });
