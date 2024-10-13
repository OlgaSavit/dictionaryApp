import TopNavigation from "@/components/navigation/TopNavigation";
import CustomButton, { ButtonTypes } from "@/components/Button";
import routerNameList from "@/navigation/routerNameList";
import { useNavigation } from "@react-navigation/native";
import LearnView from "@/components/learn/LearnView";
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import Colors from "@/constants/theme";
import React, { useMemo } from "react";
import Icon from "@/components/Icon";
import { View } from "react-native";

const LearnScreen = () => {
  const { t } = useTranslation();
  const { theme } = useSelector((store) => store.theme || {});
  const navigation = useNavigation();
  const { currentTopic } = useSelector((store) => store.topic || {});
  const customRightBtn = useMemo(() => {
    return (
      <CustomButton
        onPress={() => {
          navigation.navigate(routerNameList?.checkWord);
        }}
        btnType={ButtonTypes.roundBtn}
      >
        <Icon name={"check"} size={14} color={Colors[theme].colors.green} />
      </CustomButton>
    );
  }, [theme]);
  return (
    <Layout bottomBarShow={true}>
      <View style={{ paddingHorizontal: 16 }}>
        <TopNavigation
          title={t("texts.learnWords")}
          customRightBtn={customRightBtn}
        />
        <LearnView list={currentTopic?.words || []} />
      </View>
    </Layout>
  );
};
export default LearnScreen;
