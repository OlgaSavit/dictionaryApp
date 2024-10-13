import TopNavigation from "@/components/navigation/TopNavigation";
import CustomButton, { ButtonTypes } from "@/components/Button";
import Layout, { scrollTypes } from "@/components/Layout";
import routerNameList from "@/navigation/routerNameList";
import { useNavigation } from "@react-navigation/native";
import TopicList from "@/components/topic/TopicList";
import LoadingView from "@/components/LoadingView";
import { useTopicList } from "@/hook/useTopicList";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Colors from "@/constants/theme";
import { stylessheet } from "./styles";
import React, { useMemo } from "react";
import Icon from "@/components/Icon";
import { View } from "react-native";

const MyTopicListScreen = () => {
  const myTopic = 1;
  const { theme } = useSelector((store) => store.theme || {});
  const { t } = useTranslation();
  const styles = stylessheet(theme);
  const navigation = useNavigation();
  const { allTopicList, isLoading, onChangePage, onUpdateTopicList } =
    useTopicList(myTopic);

  const renderRightBtn = useMemo(() => {
    return (
      <View style={styles.wrapperAddIcon}>
        <CustomButton
          onPress={() => {
            navigation.navigate(routerNameList?.topicForm);
          }}
          btnType={ButtonTypes.roundBtn}
        >
          <Icon name={"close"} size={12} color={Colors[theme].colors.dark} />
        </CustomButton>
      </View>
    );
  }, []);
  return (
    <Layout bottomBarShow={true} scrollType={scrollTypes.view}>
      <View style={styles.mainWrapper}>
        <TopNavigation
          customRightBtn={renderRightBtn}
          isShowLogo={false}
          title={t("texts.myTopics")}
        />
        {isLoading ? (
          <LoadingView />
        ) : (
          <TopicList
            list={allTopicList}
            onChangePage={onChangePage}
            onUpdateTopicList={onUpdateTopicList}
          />
        )}
      </View>
    </Layout>
  );
};
export default MyTopicListScreen;
