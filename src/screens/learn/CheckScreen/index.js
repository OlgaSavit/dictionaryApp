import TopNavigation from "@/components/navigation/TopNavigation";
import Layout, { scrollTypes } from "@/components/Layout";
import CheckView from "@/components/check/CheckView";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import React from "react";

const CheckScreen = () => {
  const { t } = useTranslation();
  return (
    <Layout scrollType={scrollTypes.view} bottomBarShow={true}>
      <View style={{ paddingHorizontal: 16, flex: 1 }}>
        <TopNavigation title={t("texts.checkWords")} />
        <CheckView />
      </View>
    </Layout>
  );
};
export default CheckScreen;
