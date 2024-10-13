import { getTopUsersList, getUserInfo } from "@/store/slices/userSlice";
import TopUsersResultsView from "@/components/TopUsersResultsView";
import TopNavigation from "@/components/navigation/TopNavigation";
import { useFocusEffect } from "@react-navigation/native";
import MyResultsView from "@/components/MyResultsView";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Layout from "../../components/Layout";
import React, { useCallback } from "react";
import { View, Text } from "react-native";

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { userInfo, topUsersList } = useSelector((state) => state.user || {});
  useFocusEffect(
    useCallback(() => {
      dispatch(getUserInfo());
      dispatch(getTopUsersList());
      return () => {
        console.log("Екран втрачає фокус");
      };
    }, [])
  );
  return (
    <Layout bottomBarShow={true}>
      <View style={{ paddingHorizontal: 16 }}>
        <TopNavigation title={t("texts.dictionary")} showBack={false} />
        <MyResultsView statistic={userInfo?.statistic} />
        <TopUsersResultsView list={topUsersList} />
      </View>
    </Layout>
  );
};
export default HomeScreen;
