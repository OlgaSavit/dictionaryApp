import { StyleSheet } from "react-native";
import Colors from "@/constants/theme";
import theme from "@/constants/theme";

export const stylessheet = (theme) =>
  StyleSheet.create({
    mainWrapper: {
      flex: 1,
      marginTop: 12,
    },
    wrapperFlatList: {
      zIndex: -1,
      marginTop: 20,
    },
  });
