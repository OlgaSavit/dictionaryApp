import SoundBtn from "@/components/Sound";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { stylessheet } from "./styles";
import React from "react";

const initialProps = {
  item: null,
};
const LearnCard = (props) => {
  const { item } = { ...initialProps, ...props };
  const { theme } = useSelector((store) => store.theme || {});
  const styles = stylessheet(theme);
  return (
    <View style={styles.mainWrapper}>
      <Text>word status:{item.status}</Text>
      <Text style={styles.wrapperWord}>{item.word}</Text>
      <View>{item.voice && <SoundBtn soundUrl={item?.voice} />}</View>
      <Text style={styles.wrapperWord}>{item.wordTranslate}</Text>
    </View>
  );
};
export default LearnCard;
