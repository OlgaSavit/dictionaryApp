import { StyleSheet } from "react-native";
import Colors from "@/constants/theme";

export const stylessheet = (theme) =>
  StyleSheet.create({
    title: {
      fontSize: 20,
      fontWeight: 600,
    },
    wrapperBox: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 30,
    },
    wrapperList: {
      marginTop: 20,
      gap: 10,
    },
    wrapperItem: {
      flexDirection: "row",
      gap: 5,
    },
    txt: {
      fontSize: 16,
    },
    txtBold: {
      fontWeight: 600,
    },
    txtGrey: {
      color: Colors[theme]?.colors.gray,
    },
    txtGreen: {
      color: Colors[theme]?.colors.green,
    },
    txtYellow: {
      color: Colors[theme]?.colors.yellow,
    },
    txtBlue: {
      color: Colors[theme]?.colors.blue_100,
    },
  });
