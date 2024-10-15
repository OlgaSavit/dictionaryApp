import { WordModeTypes } from "@/constants/general";
import { useTranslation } from "react-i18next";
import DropDown from "@/components/DropDown";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { stylessheet } from "./styles";
import React from "react";

const initialProps = {
  onChangeMode: () => {},
  wordMode: WordModeTypes.default,
};
const WordMode = (props) => {
  const { onChangeMode, wordMode } = { ...initialProps, ...props };
  const { t } = useTranslation();
  const { theme } = useSelector((store) => store.theme);
  const styles = stylessheet(theme);
  const WordModeList = [
    {
      value: WordModeTypes.default,
      label: t("wordsMode.default"),
    },
    {
      value: WordModeTypes.translation,
      label: t("wordsMode.translation"),
    },
    {
      value: WordModeTypes.word,
      label: t("wordsMode.word"),
    },
  ];
  return (
    <View style={styles.tabsContainer}>
      <DropDown
        selectedValue={wordMode}
        onSelectValue={(val) => {
          onChangeMode(val?.value);
        }}
        items={WordModeList}
      />
    </View>
  );
};
export default WordMode;
