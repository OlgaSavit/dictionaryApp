import { useCheckWords } from "@/components/check/CheckView/useCheckWords";
import { View, Text, TouchableOpacity } from "react-native";
import CheckCard from "@/components/check/LearnCard";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { stylessheet } from "./styles";

const CheckView = () => {
  const { t } = useTranslation();
  const { theme } = useSelector((store) => store.theme || {});
  const styles = stylessheet(theme);
  const {
    optionsList,
    onPressNext,
    onPressPrev,
    isDisabledPrev,
    isDisabledNext,
    activeInd,
    currentWord,
    onSelectAnswer,
    selectedAnswer,
    onCheckAnswer,
    isCorrect,
  } = useCheckWords();

  const getRenderAnswerBlock = () => {
    if (isCorrect) {
      return <Text style={styles.textCorrect}>{t("texts.isCorrect")}</Text>;
    }
    if (isCorrect === false) {
      return <Text style={styles.textError}>{t("texts.isInCorrect")}</Text>;
    }
    return <></>;
  };
  return (
    <View style={{ flex: 1 }}>
      <CheckCard
        item={currentWord}
        optionsList={optionsList}
        onSelectAnswer={onSelectAnswer}
        selectedAnswer={selectedAnswer}
      />
      <View style={styles.wrapperContent}>
        {getRenderAnswerBlock()}
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
            disabled={!selectedAnswer}
            style={(styles.wrapperBtn, styles.wrapperBtnCheck)}
            onPress={onCheckAnswer}
          >
            <Text style={styles.wrapperBtnTxt}>{t("texts.check")}</Text>
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
    </View>
  );
};
export default CheckView;
