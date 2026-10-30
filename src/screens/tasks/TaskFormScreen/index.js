import TopNavigation from "@/components/navigation/TopNavigation";
import TaskForm from "@/components/tasks/forms/TaskForm";
import { useRoute } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Layout from "@/components/Layout";
import { stylessheet } from "./styles";
import { View } from "react-native";
import React from "react";

const TaskFormScreen = () => {
  const router = useRoute();
  const { theme } = useSelector((store) => store.theme || {});
  const { t } = useTranslation();
  const styles = stylessheet(theme);
  const { currentTask } = router?.params || {};
  return (
    <Layout>
      <View style={styles.mainWrapper}>
        <TopNavigation
          showBack={true}
          title={currentTask ? t("texts.editTask") : t("texts.createTask")}
        />
        <TaskForm currentTask={currentTask} />
      </View>
    </Layout>
  );
};
export default TaskFormScreen;
