import TopNavigation from "@/components/navigation/TopNavigation";
import TopicForm from "@/components/topic/forms/TopicForm";
import Layout, { scrollTypes } from "@/components/Layout";
import { useRoute } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { stylessheet } from "./styles";
import { View } from "react-native";
import React from "react";

const TopicFormScreen = () => {
  const router = useRoute();
  const { theme } = useSelector((store) => store.theme || {});
  const { t } = useTranslation();
  const styles = stylessheet(theme);
  const { currentTopic } = router?.params || {};
  return (
    <Layout scrollType={scrollTypes.view}>
      <View style={styles.mainWrapper}>
        <TopNavigation
          showBack={true}
          title={currentTopic ? t("texts.editTask") : t("topic.createTopic")}
        />
        <TopicForm currentTopic={currentTopic} />
      </View>
    </Layout>
  );
};
export default TopicFormScreen;
