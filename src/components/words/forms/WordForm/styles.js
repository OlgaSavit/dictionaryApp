import { StyleSheet } from "react-native";
import Colors from "@/constants/theme";
import theme from "@/constants/theme";

export const stylessheet = (theme) =>
  StyleSheet.create({
    mainWrapper: {
      flex: 1,
      marginTop: 12,
    },
    wrapperContent: { gap: 12, flex: 1 },
    wrapperPasswordSection: {
      gap: 12,
    },
    inputStyle: {
      maxHeight: 40,
    },
    wrapperLinkBtn: {
      marginBottom: 16,
      flexDirection: "row",
      justifyContent: "flex-end",
    },
    wrapperBottomBlock: {
      alignItems: "center",
    },
    linkBtn: {
      textDecorationLine: "underline",
    },
    errorText: {
      fontSize: 10,
      color: Colors[theme]?.colors.red,
    },
    voiceBlock: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "flex-start",
      // width: '100%',
      paddingVertical: 8,
    },
    label: {
      fontSize: 14,
    },
    wrapperInputBtn: {
      flexDirection: "row",
      alignItems: "center",
    },
    wrapperInputWithBtn: {
      flexDirection: "row",
      alignItems: "center",
    },
    indicatorWrapper: {
      paddingRight: 10,
    },
    wrapperDropDown: {
      zIndex: 9,
    },
  });
