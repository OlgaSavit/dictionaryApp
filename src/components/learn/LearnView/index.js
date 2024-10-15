import { View, Text, TouchableOpacity } from "react-native";
import LearnCard from "@/components/learn/LearnCard";
import { useSelector } from "react-redux";
import { useMemo, useState } from "react";
import { stylessheet } from "./styles";

const initialProps = {
  list: [],
};
const LearnView = (props) => {
  const { list } = { ...initialProps, ...props };
  const { theme } = useSelector((store) => store.theme || {});
  const styles = stylessheet(theme);
  const [activeInd, setActiveInd] = useState(0);
  const onPressNext = (current) => {
    if (current + 1 < list?.length) {
      setActiveInd(current + 1);
    }
  };
  const onPressPrev = (current) => {
    if (current > 0) {
      setActiveInd(current - 1);
    }
  };
  const isDisabledPrev = useMemo(() => {
    return activeInd === 0;
  }, [activeInd]);
  const isDisabledNext = useMemo(() => {
    return activeInd === list?.length - 1;
  }, [activeInd, list]);
  return (
    <View style={{ flex: 1 }}>
      <LearnCard item={list[activeInd]} />
      <View style={styles.wrapperBtns}>
        <TouchableOpacity
          disabled={isDisabledPrev}
          style={
            isDisabledPrev
              ? [styles.wrapperBtn, styles.wrapperBtnDisabled]
              : styles.wrapperBtn
          }
          onPress={() => {
            onPressPrev(activeInd);
          }}
        >
          <Text style={styles.wrapperBtnTxt}>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={isDisabledNext}
          style={
            isDisabledNext
              ? [styles.wrapperBtn, styles.wrapperBtnDisabled]
              : styles.wrapperBtn
          }
          onPress={() => {
            onPressNext(activeInd);
          }}
        >
          <Text style={styles.wrapperBtnTxt}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default LearnView;
