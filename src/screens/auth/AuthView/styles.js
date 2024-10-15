import { StyleSheet } from "react-native";

export const stylessheet = (theme) =>
  StyleSheet.create({
    mainWrapper: {
      flex: 1,
      paddingHorizontal: 16,
    },
    wrapperContent: {
      flex: 1,
      justifyContent: "center",
    },
  });
