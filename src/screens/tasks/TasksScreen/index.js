import TopNavigation from "@/components/navigation/TopNavigation";
import CustomButton, { ButtonTypes } from "@/components/Button";
import Layout, { scrollTypes } from "@/components/Layout";
import routerNameList from "@/navigation/routerNameList";
import { useNavigation } from "@react-navigation/native";
import TasksList from "@/components/tasks/TasksList";
import { useTranslation } from "react-i18next";
import Colors from "@/constants/theme";
import { stylessheet } from "./styles";
import React, { useMemo } from "react";
import Icon from "@/components/Icon";
import { View } from "react-native";

const mocDataList = [
  {
    id: 1,
    title: "Feed fish",
    description: 'to feed fish "normal" food',
  },
  {
    id: 2,
    title: "Walk the cat",
    description: "to walk Simba near the house",
  },
  {
    id: 3,
    title: "Feed fish1",
    description: 'to feed fish "normal" food',
  },
  {
    id: 4,
    title: "Walk the cat2",
    description: "to walk Simba near the house",
  },
  {
    id: 5,
    title: "Feed fish3",
    description: 'to feed fish "normal" food',
  },
  {
    id: 6,
    title: "Walk the cat4",
    description: "to walk Simba near the house",
  },
];

const TasksScreen = () => {
  const { theme } = useSelector((store) => store.theme || {});
  const { t } = useTranslation();
  const styles = stylessheet(theme);
  const navigation = useNavigation();
  const renderRightBtn = useMemo(() => {
    return (
      <View style={styles.wrapperAddIcon}>
        <CustomButton
          onPress={() => {
            navigation.navigate(routerNameList?.tasksForm);
          }}
          btnType={ButtonTypes.roundBtn}
        >
          <Icon name={"close"} size={12} color={Colors[theme].colors.dark} />
        </CustomButton>
      </View>
    );
  }, []);
  return (
    <Layout scrollType={scrollTypes.view}>
      <View style={styles.mainWrapper}>
        <TopNavigation
          customRightBtn={renderRightBtn}
          showBack={false}
          isShowLogo={false}
          title={t("texts.tasks")}
        />
        <TasksList list={mocDataList} />
      </View>
    </Layout>
  );
};
export default TasksScreen;
