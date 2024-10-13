import TopNavigation from "@/components/navigation/TopNavigation";
import Layout, { scrollTypes } from "@/components/Layout";
import WordForm from "@/components/words/forms/WordForm";
import { useRoute } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { stylessheet } from "./styles";
import { View } from "react-native";
import React from "react";

const WordFormScreen = () => {
  const router = useRoute();
  const { theme } = useSelector((store) => store.theme || {});
  const { t } = useTranslation();
  const styles = stylessheet(theme);
  const { topicItem, currentWord } = router?.params || {};
  return (
    <Layout scrollType={scrollTypes.view}>
      <View style={styles.mainWrapper}>
        <TopNavigation
          showBack={true}
          title={currentWord ? t("words.editWord") : t("words.createWord")}
        />
        <WordForm topicItem={topicItem} currentWord={currentWord} />
      </View>
    </Layout>
  );
};
export default WordFormScreen;
