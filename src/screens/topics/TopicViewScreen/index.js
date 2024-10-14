import { useWordsListByTopic } from "@/screens/topics/TopicViewScreen/useWordsListByTopic";
import TopNavigation from "@/components/navigation/TopNavigation";
import CustomButton, { ButtonTypes } from "@/components/Button";
import Layout, { scrollTypes } from "@/components/Layout";
import routerNameList from "@/navigation/routerNameList";
import { useNavigation } from "@react-navigation/native";
import WordList from "@/components/words/WordList";
import LoadingView from "@/components/LoadingView";
import Colors from "@/constants/theme";
import { stylessheet } from "./styles";


import { View } from "react-native";

import Icon from "@/components/Icon";
import React, { useMemo } from "react";
const TopicViewScreen = () => {
  const { theme } = useSelector((store) => store.theme || {});
  const { currentTopic } = useSelector((store) => store.topic || {});
  const { userInfo } = useSelector((store) => store.user || {});
  const styles = stylessheet(theme);
  const navigation = useNavigation();
  const { isLoading, wordMode, onChangeMode, onUpdateWordsByTopic } =
    useWordsListByTopic();
  const renderRightBtn = useMemo(() => {
    if (userInfo?.id === currentTopic?.userId) {
      return (
        <View style={styles.wrapperRightBtns}>
          <View style={styles.wrapperAddIcon}>
            <CustomButton
              onPress={() => {
                navigation.navigate(routerNameList?.wordForm, {
                  topicItem: currentTopic,
                });
              }}
              btnType={ButtonTypes.roundBtn}
            >
              <Icon
                name={"close"}
                size={12}
                color={Colors[theme].colors.dark}
              />
            </CustomButton>
          </View>
          <View style={styles.wrapperAddIconNormal}>
            <CustomButton
              onPress={() => {
                navigation.navigate(routerNameList?.lern);
              }}
              btnType={ButtonTypes.roundBtn}
            >
              <Icon
                name={"usefulFacts"}
                size={12}
                color={Colors[theme].colors.green}
              />
            </CustomButton>
          </View>
        </View>
      );
    }
    return null;
  }, [currentTopic]);
  return (
    <Layout bottomBarShow={true} scrollType={scrollTypes.view}>
      <View style={styles.mainWrapper}>
        <TopNavigation
          customRightBtn={renderRightBtn}
          isShowLogo={false}
          title={currentTopic?.title}
        />
        {isLoading ? (
          <LoadingView />
        ) : (
          <WordList
            list={currentTopic?.words}
            topicItem={currentTopic}
            wordMode={wordMode}
            onChangeMode={onChangeMode}
            onUpdateWordsByTopic={onUpdateWordsByTopic}
          />
        )}
      </View>
    </Layout>
  );
};
export default TopicViewScreen;
