import { useTranslation } from "react-i18next";
import DropDown from "@/components/DropDown";
import SoundBtn from "@/components/Sound";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { stylessheet } from "./styles";
import React from "react";

const initialProps = {
  item: null,
  optionsList: [],
  onSelectAnswer: () => {},
  selectedAnswer: null,
};
const CheckCard = (props) => {
  const { t } = useTranslation();
  const { item, optionsList, onSelectAnswer, selectedAnswer } = {
    ...initialProps,
    ...props,
  };
  const { theme } = useSelector((store) => store.theme || {});
  const styles = stylessheet(theme);
  return (
    <View style={styles.mainWrapper}>
      <Text>word status:{item.status}</Text>
      <Text style={styles.wrapperWord}>{item.word}</Text>
      <View>{item.voice && <SoundBtn soundUrl={item?.voice} />}</View>
      <View style={styles.wrapperSelect}>
        <View style={styles.wrapperDropDown}>
          <DropDown
            name={"answer"}
            placeholder={t("texts.selectAnswer")}
            selectedValue={selectedAnswer?.value}
            onSelectValue={(val) => {
              onSelectAnswer(val);
            }}
            searchable={false}
            items={optionsList}
          />
        </View>
      </View>
    </View>
  );
};
export default CheckCard;
